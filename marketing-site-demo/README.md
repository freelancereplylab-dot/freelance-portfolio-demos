# Stillwater Yoga — Marketing site demo

A multi-page marketing website with a blog, built with **Next.js 14 (App Router) + Tailwind CSS**. Portfolio demo of the kind of 5–8 page marketing site I build for clients.

## Live demo

**▶ [marketing-site-demo.vercel.app](https://marketing-site-demo.vercel.app)** — live on Vercel.

## Pages

- `/` — home (hero, class preview, testimonial, journal preview)
- `/classes` — weekly schedule + pricing tiers
- `/about` — studio story + teacher bios
- `/blog` — journal index, and `/blog/[slug]` post pages (statically generated)
- `/contact` — booking form (front-end only in this demo)

## Stack & notes

- Next.js 14 App Router, fully static (SSG) — every route prerendered, fast cold loads
- Tailwind CSS with a small custom design token set (sage palette, serif/sans pairing)
- `next/font` for Inter + Fraunces, no layout shift
- Per-page SEO metadata + OpenGraph via the Metadata API
- Blog content lives in `lib/posts.ts` — swap for a CMS (Sanity/Contentful) on a real build

## Run locally

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```
