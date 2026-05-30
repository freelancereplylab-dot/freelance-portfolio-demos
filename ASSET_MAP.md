# Asset map — services, projects, covers, screenshots

Authoritative mapping so we never lose track of which file goes where.

## Fiverr gigs (currently published)

| Gig | Cover file | Status |
|---|---|---|
| Custom web scraper in Nodejs + Puppeteer | `covers/fiverr_scraper_cover.png` (1280×769) | LIVE |
| Custom browser automation bot in Nodejs + Puppeteer | `covers/fiverr_bot_cover.png` (1280×769) | LIVE |
| Marketing website with blog in Nextjs + Tailwind | `covers/fiverr_marketing_cover.png` (1280×769) | LIVE |
| Modern landing page in Nextjs + Tailwind | `covers/fiverr_landing_cover.png` (1280×769) | LIVE |

## Contra services (currently published)

Old covers (PNG, broken solo-page CDN cache) → replace with v2 (JPG, new filename).

| Service | Old cover | New cover (v2) | Status |
|---|---|---|---|
| Browser automation bot — Node.js + Puppeteer | `covers/contra_bot.png` | `covers/contra-bot-v2.jpg` (1600×1200) | re-upload pending |
| Custom web scraper in Node.js — Puppeteer or Playwright | (none, was Fiverr file) | `covers/contra-scraper-v2.jpg` (1600×1200) | re-upload pending |
| Marketing site with blog — Next.js + Tailwind, 5–8 pages | `covers/contra_marketing.png` | `covers/contra-marketing-v2.jpg` (1600×1200) | re-upload pending |
| Landing page in Next.js — design to deploy in 5 days | `covers/contra_landing.png` | `covers/contra-landing-v2.jpg` (1600×1200) | re-upload pending |

## Portfolio projects ↔ screenshots ↔ descriptions

| Project | Folder | Screenshot | Description file |
|---|---|---|---|
| Modern Restaurant Landing | `portfolio/restaurant-landing/` | `portfolio/screenshots/restaurant-landing.png` (1280×2113, full page) | `portfolio/restaurant-landing/portfolio-description.md` |
| Public Product Catalog Scraper | `portfolio/catalog-scraper/` | `portfolio/screenshots/catalog-scraper.png` (1280×769) | `portfolio/catalog-scraper/portfolio-description.md` |
| Form Fill from CSV Automation | `portfolio/form-fill-csv/` | `portfolio/screenshots/form-fill-csv.png` (1280×769) | `portfolio/form-fill-csv/portfolio-description.md` |
| Daily KPI Dashboard Bot | `portfolio/kpi-dashboard-bot/` | `portfolio/screenshots/kpi-dashboard-bot.png` (1280×769) | `portfolio/kpi-dashboard-bot/portfolio-description.md` |

## Portfolio entry mapping (Fiverr / Contra Work)

For each portfolio entry, paste:
- **Title** from the portfolio-description.md
- **Description** (Short paragraph from the same file)
- **Tags** suggested at top of portfolio-description.md
- **Image** corresponding screenshot from `portfolio/screenshots/`
- **External link** — the GitHub URL after we push

## Source HTML for cover/screenshot generation (don't ship these to clients)

- `covers/*.html` — source HTML for cover image rendering
- `portfolio/screenshots/_src/*.html` — source HTML for portfolio screenshots

Both folders contain `*.html` source + the rendered `*.png`/`*.jpg`. The HTML files are needed only to re-generate; they are not portfolio assets themselves.
