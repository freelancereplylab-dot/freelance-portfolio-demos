# Form Fill from CSV

Read leads from a CSV file, open a target form in a real Chromium browser, fill it out, submit, and log the server response — one row at a time, with rate limiting and a per-row success/fail report at the end.

The default target is **httpbin.org/forms/post**, a public endpoint that simply echoes back whatever you submitted, so this demo is safe to run without spamming anyone.

## What it does

1. Reads `sample-data.csv` (you can replace with any CSV; first row is the header).
2. Opens https://httpbin.org/forms/post in a headed or headless Chromium.
3. For each row, fills the matching fields by name, clicks Submit, waits for the response page, and captures the echoed JSON.
4. Logs result per row (`OK` / `FAIL`) to stdout.
5. Writes a final `output/report.csv` mapping input row → outcome → response excerpt.

Default pace: 2 seconds between submissions. Tune with `--delay 5000`.

## Run it

```bash
npm install
node fill-forms.js                  # headless, default pace
node fill-forms.js --headed         # show the browser
node fill-forms.js --delay 5000     # 5s between submissions
node fill-forms.js --file my.csv    # use a different CSV
```

## Sample data

`sample-data.csv` ships with 5 fake leads (Custname, Custtel, Custemail, Size, Topping, Delivery, Comments). Replace with your own — keep the headers matching the form field `name=` attributes.

## What this demonstrates for clients

- Reading CSV (no library — native parser, handles quoted fields)
- Per-row Puppeteer flow: navigate → type → click → wait → extract
- Rate limiting between submissions
- Structured output report (input + outcome + response)

## What this deliberately does NOT do

- No spam, no real recipient form. The target is a public echo endpoint.
- No CAPTCHA bypass.
- No login automation in the demo (real client work adds this with care).

## Stack

Node.js 18+, Puppeteer 22. Single file scraper.

## License

MIT.
