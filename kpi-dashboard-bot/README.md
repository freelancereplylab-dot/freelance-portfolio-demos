# Daily KPI Dashboard Bot

A small Node.js bot that opens a public dashboard URL, takes a full-page screenshot, and optionally posts it to a Telegram chat. Designed to run once a day via cron (Linux/macOS) or Task Scheduler (Windows).

The default demo target is the **GitHub status page** (https://www.githubstatus.com) — a public, screenshotable dashboard that nobody minds you visiting. Swap it for any URL you have permission to view.

## What it does

1. Launches headless Chromium via Puppeteer.
2. Goes to the target URL, waits for network idle, gives the page a final 2 seconds to settle (animations, late charts).
3. Captures a full-page PNG to `output/screenshot-YYYY-MM-DD.png`.
4. If Telegram credentials are set in `.env`, posts the screenshot to the chat with today's date as the caption.
5. Exits cleanly so it works as a cron job.

## Setup

```bash
npm install
cp .env.example .env
# edit .env if you want Telegram delivery
```

Run once to test:

```bash
node bot.js
node bot.js --url https://status.cloudflare.com    # different dashboard
node bot.js --no-telegram                          # skip Telegram even if configured
```

## Telegram setup (optional)

1. Create a bot with [@BotFather](https://t.me/BotFather), grab the token.
2. Add the bot to your chat / channel, send any message, then visit `https://api.telegram.org/bot<TOKEN>/getUpdates` to find the chat ID.
3. Put both in `.env`:

```
TELEGRAM_BOT_TOKEN=123456:ABC-DEF...
TELEGRAM_CHAT_ID=-1001234567890
```

## Schedule it

**Linux/macOS cron** — open `crontab -e` and add:

```cron
0 9 * * * cd /path/to/kpi-dashboard-bot && /usr/bin/node bot.js >> bot.log 2>&1
```

That runs every day at 09:00 local time.

**Windows Task Scheduler** — create a Basic Task pointing at `node.exe` with argument `C:\path\to\kpi-dashboard-bot\bot.js` and the working directory set to the project folder.

## What this demonstrates

- Headless Puppeteer screenshot with the right `waitUntil` and a settle delay
- Filesystem layout that plays nicely with cron (relative paths, exit codes, log file)
- Optional Telegram integration as a separate module (don't pay for it if you don't use it)
- Date-stamped output filename

## License

MIT.
