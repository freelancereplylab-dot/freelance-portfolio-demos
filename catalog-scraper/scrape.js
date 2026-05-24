// Public Product Catalog Scraper
// Crawls books.toscrape.com (a sandbox for scraping practice) and exports JSON + CSV.
//
// Usage:
//   node scrape.js              # full crawl
//   node scrape.js --max 3      # crawl only first 3 pages
//
// Output:
//   output/books.json
//   output/books.csv

import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';
import path from 'node:path';

const BASE = 'https://books.toscrape.com';
const START = `${BASE}/catalogue/page-1.html`;
const MAX_FLAG = process.argv.indexOf('--max');
const MAX = MAX_FLAG !== -1 ? Number(process.argv[MAX_FLAG + 1]) : Infinity;

const OUT_DIR = path.join(process.cwd(), 'output');
const RATING_MAP = { One: 1, Two: 2, Three: 3, Four: 4, Five: 5 };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Fetch and parse a single listing page with retries. */
async function scrapePage(page, url, attempt = 1) {
  try {
    const t0 = Date.now();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    const books = await page.$$eval('article.product_pod', (nodes) =>
      nodes.map((n) => ({
        title: n.querySelector('h3 a')?.getAttribute('title') ?? null,
        price: n.querySelector('.price_color')?.textContent?.trim() ?? null,
        inStock: !!n.querySelector('.icon-ok'),
        ratingClass: n.querySelector('.star-rating')?.className ?? '',
        href: n.querySelector('h3 a')?.getAttribute('href') ?? null
      }))
    );
    const next = await page
      .$eval('li.next a', (a) => a.getAttribute('href'))
      .catch(() => null);
    return {
      books: books.map((b) => ({
        title: b.title,
        price: b.price,
        inStock: b.inStock,
        rating: ratingFromClass(b.ratingClass),
        url: b.href ? new URL(b.href, url).toString() : null
      })),
      next: next ? new URL(next, url).toString() : null,
      ms: Date.now() - t0
    };
  } catch (err) {
    if (attempt >= 3) throw err;
    const backoff = 1000 * 2 ** (attempt - 1);
    console.warn(`  retry ${attempt}/3 after ${backoff}ms: ${err.message}`);
    await sleep(backoff);
    return scrapePage(page, url, attempt + 1);
  }
}

function ratingFromClass(cls) {
  const match = (cls || '').match(/star-rating\s+(\w+)/);
  return match ? RATING_MAP[match[1]] ?? null : null;
}

function toCsv(books) {
  const header = 'title,price,inStock,rating,url';
  const rows = books.map(
    (b) =>
      [csv(b.title), csv(b.price), b.inStock ? 'true' : 'false', b.rating ?? '', csv(b.url)].join(',')
  );
  return [header, ...rows].join('\n');
}

function csv(val) {
  if (val == null) return '';
  const s = String(val);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (compatible; catalog-scraper/1.0 portfolio demo)');

  const all = [];
  let url = START;
  let pageNum = 1;
  while (url && pageNum <= MAX) {
    console.log(`page ${pageNum} → ${url}`);
    const { books, next, ms } = await scrapePage(page, url);
    console.log(`  ${books.length} books in ${ms}ms`);
    all.push(...books);
    url = next;
    pageNum += 1;
  }

  await browser.close();
  await fs.writeFile(path.join(OUT_DIR, 'books.json'), JSON.stringify(all, null, 2));
  await fs.writeFile(path.join(OUT_DIR, 'books.csv'), toCsv(all));
  console.log(`\nDone. ${all.length} books written to ./output/`);
}

main().catch((err) => {
  console.error('fatal:', err);
  process.exit(1);
});
