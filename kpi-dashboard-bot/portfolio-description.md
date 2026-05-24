# Portfolio description — paste into Fiverr / Contra

**Title:** Daily KPI Dashboard Bot — Node.js + Puppeteer + Telegram

**Short:** A small Node.js bot that screenshots any public dashboard URL daily and delivers the image to Telegram. Runs as a one-shot CLI so it slots cleanly into cron / Task Scheduler. Default target is the GitHub status page so it works out of the box for demo.

**Tags:** Puppeteer, Node.js, Automation, Telegram Bot, Screenshot, Cron, KPI

**Outcome:** ~80 LOC main file + ~25 LOC Telegram wrapper. Zero npm deps beyond Puppeteer (uses native fetch + FormData). Bundled .env loader so the project stays small.

**Tech:** Node.js 18+ (native fetch + FormData), Puppeteer 22, Telegram Bot API.

**Why it matters for clients:** the canonical "automate the boring part of my morning" job — wake up, see the chart, no manual login. Same shape works for Stripe revenue, Google Analytics, internal dashboards, Notion charts. Replace URL + add cookies if behind login.
