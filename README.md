# TheTAG Ventures & Partners — Website

The marketing site for TheTAG Ventures & Partners, built as a modern multi-page
Next.js application. Human-centered transformation for the age of intelligent
systems — Heart, Mind, and Technology.

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router, Server Components, Server Actions)
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** — Cormorant Garamond, DM Sans, DM Mono (self-hosted, zero layout shift)
- A bespoke, hand-authored CSS design system (no UI framework)

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — framework summary, three practices, process, in-house venture, CTA |
| `/who-we-are` | The three founders, origin story, convictions |
| `/framework` | Heart · Mind · Technology, the integrated framework |
| `/how-we-work` | Vision & mission, the four-phase methodology, engagement models, standards |
| `/technology-advisory` | Service practice — Tech-Led (Amith) |
| `/strategic-ventures` | Service practice — All-Pillars (Kiran) |
| `/design-studio` | Service practice — Mind-Led (Manasa) |
| `/contact` | Contact form + ways to start |
| `/thank-you` | Post-submission confirmation (noindex) |

## Features

- **Shared layout** — fixed blurred nav with active-link highlighting and a
  responsive mobile menu, plus a shared footer and cookie-consent banner.
- **Scroll reveal** — elements with the `fade-up` class animate in via an
  `IntersectionObserver`, re-armed on every navigation.
- **Contact form** — a React **Server Action** validates the submission
  server-side (with a honeypot) and redirects to `/thank-you`; the client form
  reports field errors via `useActionState` / `useFormStatus`.
- **Interactive FAQ** accordions on each service page.
- **SEO** — per-page metadata, Open Graph/Twitter tags, JSON-LD-ready content,
  a generated `sitemap.xml`, and a `robots.txt` that disallows `/thank-you`.
- Fully responsive down to mobile, matching the original design breakpoints.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx              # Fonts, metadata, nav/footer/cookie/reveal
│  ├─ page.tsx                # Home
│  ├─ who-we-are/page.tsx
│  ├─ framework/page.tsx
│  ├─ how-we-work/page.tsx
│  ├─ technology-advisory/page.tsx
│  ├─ strategic-ventures/page.tsx
│  ├─ design-studio/page.tsx
│  ├─ contact/
│  │  ├─ page.tsx
│  │  └─ actions.ts           # Server Action for the contact form
│  ├─ thank-you/page.tsx
│  ├─ not-found.tsx           # Custom 404
│  ├─ sitemap.ts / robots.ts
│  └─ globals.css             # Full design system + per-page styles
├─ components/                # Nav, Footer, CookieBanner, FadeUpObserver, Faq, ContactForm
└─ lib/site.ts                # Org info + navigation config
public/                       # favicon.svg, og-image.svg
```

## Configuration

Set the canonical site URL so Open Graph tags, the sitemap, and `robots.txt`
point at the right domain in production:

```bash
# .env.local (or your host's environment settings)
NEXT_PUBLIC_SITE_URL=https://th3tag.com
```

On Vercel this falls back to the project's production URL automatically.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — Next.js
is auto-detected, no build configuration needed. The app also runs on any
Node.js host via `npm run build && npm run start`.
