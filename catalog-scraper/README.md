# Public Product Catalog Scraper

A small, production-shaped scraper that crawls **books.toscrape.com** — a sandbox specifically built by Scrapinghub for scraping practice — and exports a clean JSON + CSV dataset of every book on the site.

This is a portfolio demo. The same shape transfers directly to real client work: replace the URL and the selectors, keep the retry / pagination / output logic.

## What it does

1. Visits the first listing page on `books.toscrape.com`.
2. Walks pagination to the end (about 50 pages).
3. For every book card, extracts: title, price (£), in-stock flag, rating (1–5 stars), product page URL.
4. Retries each page up to 3 times with exponential backoff (1s → 2s → 4s).
5. Writes results to `output/books.json` and `output/books.csv`.
6. Logs progress to stdout with timing per page.

## What it deliberately does NOT do

- No login or session handling — the demo target is fully public.
- No proxies — the demo target rate-limits at zero req/s. For real client work I add `--proxy-list` support.
- No headless detection bypass — none needed here. For protected targets I add a separate `stealth-mode` flag.

## Run it

```bash
npm install
node scrape.js          # default: full crawl, ~1-2 minutes
node scrape.js --max 3  # crawl only the first 3 pages, for testing
```

Output will appear in `./output/books.json` and `./output/books.csv`.

A sample run output is committed in `example-output.csv` so reviewers can see the shape without running the scraper.

## Project layout

```
catalog-scraper/
├── scrape.js          ← the scraper (single file, ~150 lines)
├── package.json
├── README.md
├── portfolio-description.md
├── example-output.csv ← truncated sample of a real run
└── output/            ← gitignored, populated when you run it
```

## Stack

Node.js 18+, Puppeteer 22. No build step.

## License

MIT.
