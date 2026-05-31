# Scraper Output Dashboard — demo

An interactive dashboard that renders the kind of **structured data a Puppeteer scraping job produces**. Built with **Next.js 14 + Tailwind**. Companion to the [`catalog-scraper`](../catalog-scraper) demo — it shows what the cleaned output looks like once it reaches a UI.

## Live demo

**▶ [scraper-dashboard-demo.vercel.app](https://scraper-dashboard-demo.vercel.app)** — live on Vercel.

## What it shows

- 42 sample product records (scraped catalog → cleaned JSON)
- Full-text search across name / SKU / brand
- Category filter + "in stock only" toggle
- Click any column header to sort (price, rating, reviews, …)
- One-click **Export CSV** of the current filtered view (client-side)
- Summary stats (count, in-stock ratio, average price, categories)

The scraping itself lives in the `catalog-scraper` demo; this project is the presentation layer — useful when a client wants their scraped data as a usable dashboard, not just a file.

## Run locally

```bash
npm install
npm run dev    # http://localhost:3000
```
