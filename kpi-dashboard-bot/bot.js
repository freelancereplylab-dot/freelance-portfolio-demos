// Daily KPI Dashboard Bot
// Screenshots a public dashboard, optionally sends to Telegram.
//
// Usage:
//   node bot.js
//   node bot.js --url https://status.cloudflare.com
//   node bot.js --no-telegram

import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';
import path from 'node:path';
import { sendPhoto } from './telegram.js';

const args = process.argv.slice(2);
const argFlag = (name, fallback) => {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1];
};
const URL = argFlag('--url', 'https://www.githubstatus.com');
const NO_TELEGRAM = args.includes('--no-telegram');

const OUT_DIR = path.join(process.cwd(), 'output');
const TODAY = new Date().toISOString().slice(0, 10);
const OUT_FILE = path.join(OUT_DIR, `screenshot-${TODAY}.png`);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Tiny .env loader so the script has zero runtime deps beyond puppeteer.
async function loadEnv() {
  try {
    const txt = await fs.readFile(path.join(process.cwd(), '.env'), 'utf8');
    for (const line of txt.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
    }
  } catch {
    /* .env is optional */
  }
}

async function main() {
  await loadEnv();
  await fs.mkdir(OUT_DIR, { recursive: true });

  console.log(`[${TODAY}] capturing ${URL}`);
  const browser = await puppeteer.launch({ headless: 'new' });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });
    await sleep(2000); // let late charts/animations settle
    await page.screenshot({ path: OUT_FILE, fullPage: true });
    console.log(`  saved ${OUT_FILE}`);
  } finally {
    await browser.close();
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!NO_TELEGRAM && token && chatId) {
    console.log('  posting to Telegram…');
    await sendPhoto({
      token,
      chatId,
      filePath: OUT_FILE,
      caption: `KPI snapshot — ${TODAY}\n${URL}`
    });
    console.log('  Telegram OK');
  } else if (!NO_TELEGRAM) {
    console.log('  (skipping Telegram — TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not set)');
  }
}

main().catch((err) => {
  console.error('fatal:', err);
  process.exit(1);
});
