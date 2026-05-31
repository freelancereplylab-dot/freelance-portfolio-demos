# Form-Fill Bot — Run Monitor (demo)

A live, animated monitor for a **browser-automation bot run**, built with **Next.js 14 + Tailwind**. Visual companion to the [`form-fill-csv`](../form-fill-csv) demo — it shows what a bot run *looks like* in motion: reading leads, submitting forms, retrying, and flagging failures.

## Live demo

**▶ [bot-monitor-demo.vercel.app](https://bot-monitor-demo.vercel.app)** — live on Vercel.

## What it shows

- Streaming, timestamped log console (`bot.log`) — launch, per-lead submit, retries, completion
- Live progress bar + counters (processed / ok / flagged)
- Per-lead results table with status badges (queued → submitting → submitted / flagged)
- Realistic handling: a timeout retry, a rate-limit back-off, an invalid-email skip, a CAPTCHA flag
- **Run bot again** to replay the run

The run here is scripted for a clean demo; the real automation logic lives in `form-fill-csv` (Puppeteer, rate-limited, resumable).

## Run locally

```bash
npm install
npm run dev    # http://localhost:3000
```
