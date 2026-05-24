# Portfolio description — paste into Fiverr / Contra

**Title:** Form Fill from CSV — Node.js + Puppeteer

**Short:** Reads a CSV of leads and submits each row to a target form one-by-one in a real Chromium browser. Captures the server response per row and writes a structured report so you can see exactly which submissions succeeded. Default target is httpbin.org (a safe public echo endpoint) so reviewers can run it without spamming anyone.

**Tags:** Puppeteer, Node.js, Automation, Form Filling, Lead Submission, CSV

**Outcome:** ~150 LOC, native CSV parser (no extra deps), 2-second rate limit, full report.csv with input + outcome + response excerpt.

**Tech:** Node.js 18+, Puppeteer 22.

**Why it matters for clients:** the exact shape clients ask for — "I have 200 leads in a spreadsheet, please submit them to X form." The demo handles text, email, tel, radio, checkbox, textarea fields out of the box.
