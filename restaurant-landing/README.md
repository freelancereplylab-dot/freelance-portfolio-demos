# Café Đà Nẵng — Restaurant Landing Page

A single-page restaurant landing built with Next.js 14 (App Router) + Tailwind CSS.

Mobile-first, accessible, fast — the kind of site that doesn't embarrass you on a slow 3G connection in a coffee shop. Designed as a portfolio demo of the work I'd ship to a paying client.

## Live demo

Deploy to Vercel in one click after cloning, or run locally:

```bash
pnpm install   # or npm install
pnpm dev       # opens http://localhost:3000
```

## What's inside

- `app/page.tsx` — the full page (hero, menu preview, hours, contact CTA, footer)
- `app/layout.tsx` — root layout with `<html>` and the Inter font from `next/font`
- `app/globals.css` — Tailwind base layer
- `app/components/Section.tsx` — small wrapper for consistent vertical rhythm
- `app/components/MenuCard.tsx` — reusable card for menu items
- `tailwind.config.ts` — custom orange/cream palette
- `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs` — standard Next.js plumbing

The total project is intentionally small (~300 lines of TSX + CSS). Real client work would add a CMS, contact form backend, analytics, and proper images — this demo focuses on the static frontend shape.

## Build for production

```bash
pnpm build
pnpm start
```

Output deploys to any Node host or static-export-friendly platform (Vercel, Cloudflare Pages, Netlify).

## Screenshot

To capture: run `pnpm dev`, open http://localhost:3000, then either screenshot manually or use Puppeteer:

```bash
node -e "import('puppeteer').then(async ({default: p}) => { const b = await p.launch(); const pg = await b.newPage(); await pg.setViewport({width:1280,height:800}); await pg.goto('http://localhost:3000'); await pg.screenshot({path:'screenshot.png', fullPage: true}); await b.close(); })"
```

## License

MIT. Copy, fork, learn from it.
