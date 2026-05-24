# Portfolio description — paste into Fiverr / Contra

**Title:** Public Product Catalog Scraper — Node.js + Puppeteer

**Short:** A production-shaped scraper that crawls a real catalog (1,000+ items across 50 paginated pages), retries failures with exponential backoff, and exports clean JSON + CSV. Targets books.toscrape.com (a public scraping sandbox) so reviewers can run it without any setup.

**Tags:** Puppeteer, Web Scraping, Node.js, CSV Export, Data Extraction

**Outcome:** ~150 LOC, single file, runs `node scrape.js` end-to-end in 1–2 minutes, produces both JSON (machine-readable) and CSV (Excel/Sheets-friendly).

**Tech:** Node.js 18+, Puppeteer 22 (headless Chromium), native fs/promises, no other deps.

**Why it matters for clients:** the shape — retry logic, pagination handling, structured output — is exactly what real client scrapers need. To adapt for a real target, change the URL and ~20 lines of selectors.
