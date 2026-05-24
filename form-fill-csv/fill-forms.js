// Form Fill from CSV
// Reads rows from a CSV, submits each one to https://httpbin.org/forms/post,
// and writes a per-row report to output/report.csv
//
// Usage:
//   node fill-forms.js
//   node fill-forms.js --headed         # show the browser
//   node fill-forms.js --delay 5000     # 5s between submissions
//   node fill-forms.js --file my.csv    # use a different CSV

import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';
import path from 'node:path';

const TARGET = 'https://httpbin.org/forms/post';
const OUT_DIR = path.join(process.cwd(), 'output');
const args = process.argv.slice(2);
const argFlag = (name, fallback) => {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1];
};

const FILE = argFlag('--file', 'sample-data.csv');
const DELAY = Number(argFlag('--delay', '2000'));
const HEADED = args.includes('--headed');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Minimal RFC-4180-ish CSV parser. Handles quoted fields and escaped quotes. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"' && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cur += ch;
      }
    } else {
      if (ch === '"') inQuotes = true;
      else if (ch === ',') {
        row.push(cur);
        cur = '';
      } else if (ch === '\n' || ch === '\r') {
        if (ch === '\r' && text[i + 1] === '\n') i++;
        row.push(cur);
        rows.push(row);
        row = [];
        cur = '';
      } else cur += ch;
    }
  }
  if (cur || row.length) {
    row.push(cur);
    rows.push(row);
  }
  // remove trailing empty rows
  while (rows.length && rows[rows.length - 1].every((v) => v === '')) rows.pop();
  const [header, ...data] = rows;
  return data.map((r) => Object.fromEntries(header.map((h, i) => [h.trim(), r[i] ?? ''])));
}

function escapeCsv(val) {
  const s = String(val ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

async function submitOne(page, row) {
  await page.goto(TARGET, { waitUntil: 'domcontentloaded', timeout: 20000 });
  for (const [field, value] of Object.entries(row)) {
    if (!value) continue;
    // text + email + tel inputs
    const text = await page.$(`input[name="${field}"]`);
    if (text) {
      const type = await text.evaluate((el) => el.type);
      if (['text', 'email', 'tel', 'time'].includes(type)) {
        await text.click({ clickCount: 3 });
        await text.type(value, { delay: 20 });
        continue;
      }
      if (type === 'radio') {
        const radio = await page.$(`input[name="${field}"][value="${value}"]`);
        if (radio) await radio.click();
        continue;
      }
      if (type === 'checkbox') {
        const cb = await page.$(`input[name="${field}"][value="${value}"]`);
        if (cb) await cb.click();
        continue;
      }
    }
    // textarea
    const ta = await page.$(`textarea[name="${field}"]`);
    if (ta) {
      await ta.type(value, { delay: 20 });
      continue;
    }
  }
  // submit
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 }),
    page.click('button[type="submit"], button.submit, form button')
  ]);
  // httpbin returns a JSON-looking page; capture it
  const body = await page.$eval('body', (b) => b.innerText);
  return body.slice(0, 500);
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const csv = await fs.readFile(path.resolve(FILE), 'utf8');
  const rows = parseCsv(csv);
  console.log(`Loaded ${rows.length} rows from ${FILE}`);

  const browser = await puppeteer.launch({ headless: HEADED ? false : 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (compatible; form-fill-csv/1.0 portfolio demo)');

  const report = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    process.stdout.write(`row ${i + 1}/${rows.length} (${row.custname || ''}) … `);
    try {
      const response = await submitOne(page, row);
      report.push({ index: i + 1, name: row.custname || '', status: 'OK', response });
      console.log('OK');
    } catch (err) {
      report.push({ index: i + 1, name: row.custname || '', status: 'FAIL', response: err.message });
      console.log(`FAIL (${err.message})`);
    }
    if (i < rows.length - 1) await sleep(DELAY);
  }
  await browser.close();

  const out = [
    'index,name,status,response',
    ...report.map((r) => [r.index, escapeCsv(r.name), r.status, escapeCsv(r.response)].join(','))
  ].join('\n');
  const outFile = path.join(OUT_DIR, 'report.csv');
  await fs.writeFile(outFile, out);
  const okCount = report.filter((r) => r.status === 'OK').length;
  console.log(`\nDone. ${okCount}/${report.length} OK. Report → ${outFile}`);
}

main().catch((err) => {
  console.error('fatal:', err);
  process.exit(1);
});
