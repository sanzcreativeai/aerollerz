# Aerollerz Media & Entertainment — Chennai

Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript · Full-SSG premium site.

**45 pre-rendered pages**: Home · About · Contact · Terms · Privacy · 10 service pages · Portfolio index + 11 case studies · Journal + 12 articles.

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Deploy to Vercel + aerollerz.com
```bash
git init
git add .
git commit -m "Aerollerz launch"
git branch -M main
git remote add origin https://github.com/sanzcreativeai/aerollerz.git
git push -u origin main
```
1. vercel.com → Add New → Project → import `sanzcreativeai/aerollerz`
2. Framework preset: Next.js (auto-detected)
3. Add env: `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` (optional — Formspree URL)
4. Deploy
5. Project → Settings → Domains → add `aerollerz.com` + follow DNS instructions

## What's built in

- **White theme** with cyan / pink / purple brand accents matching the Aerollerz logo
- **Premium animated loading screen** — logo squares pop, figure draws, letters cascade
- **Full-bleed hero video overlay** — 3 clips auto-loop with white mesh gradient wash
- **Scroll animations** — fade/slide reveals on every section via IntersectionObserver
- **Animated counters** on stats (24+, 500+, 29, 4.6★)
- **Client logo marquee** — infinite horizontal scroll
- **3D tilt cards** on portfolio and service tiles (desktop)
- **Scroll progress bar** at top of page
- **Aero AI chatbot** — guided brief flow (event → date → budget → name → phone), hands off to WhatsApp with everything prefilled
- **Floating WhatsApp + Call buttons** on every page
- **Full SEO** — JSON-LD schema (Organization, WebSite, LocalBusiness/EventPlanner, Service, FAQPage, BreadcrumbList, CreativeWork, Article), sitemap, robots.txt, canonical URLs, OpenGraph + Twitter cards, per-page meta
- **Accessible** — `prefers-reduced-motion` respected, semantic HTML, ARIA labels, keyboard nav
- **Fast** — static generation, next/image AVIF+WebP, next/font self-hosted, no runtime DB

## Edit content

| What | Where |
|---|---|
| Contact info, stats, bio | `src/lib/site.ts` |
| 10 service pages | `src/lib/services.ts` |
| 11 case studies | `src/lib/cases.ts` |
| 12 blog posts | `src/lib/posts.ts` |
| SEO schema | `src/lib/schema.tsx` |
| Theme (colors, fonts) | `src/app/globals.css` |

## Contact form

Set `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` to a Formspree, Resend or similar POST endpoint. Without it, the form opens a prefilled WhatsApp message instead.

## Media files included
- Logo (SVG inline for perf + colored PNG fallback)
- Founder photo
- 10 real event photos (Rotary, Octave, Accsys, dance productions)
- 16 branded portfolio concept images
- 3 hero videos (compressed to 720p, muted, autoplay-safe)
- 6 reels (compressed to 540p for load speed)

**Replace with your originals** at same paths before deploying for full-quality assets.
