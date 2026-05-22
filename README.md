# HelloWorld

My first project on the web — a modern, multi-page personal website built while
learning web technologies and how to build and deploy real applications.

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router)
- **[React 19](https://react.dev/)** with Server Components & Server Actions
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)**

## Features

- **Multi-page site** — Home, About, Projects, Blog, and Contact, sharing a
  common navbar and footer via a root layout.
- **Dark mode** — class-based theme toggle persisted to `localStorage`, with an
  inline script to prevent a flash of the wrong theme on load.
- **Dynamic blog** — individual post pages (`/blog/[slug]`) pre-rendered at
  build time with `generateStaticParams`.
- **Contact form** — a React Server Action validates input on the server and
  reports success/errors using `useActionState` and `useFormStatus`.
- **SEO** — per-page metadata, Open Graph/Twitter tags, plus generated
  `sitemap.xml` and `robots.txt`.
- **Responsive & accessible** — mobile menu, semantic markup, keyboard-friendly
  controls, and a fully responsive layout.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx          # Root layout: fonts, theme script, navbar, footer
│  ├─ page.tsx            # Home
│  ├─ about/page.tsx      # About + skills + timeline
│  ├─ projects/page.tsx   # Projects grid
│  ├─ blog/
│  │  ├─ page.tsx         # Blog index
│  │  └─ [slug]/page.tsx  # Individual post (SSG)
│  ├─ contact/
│  │  ├─ page.tsx         # Contact page
│  │  └─ actions.ts       # Server Action for the form
│  ├─ not-found.tsx       # Custom 404
│  ├─ sitemap.ts          # Generated sitemap
│  ├─ robots.ts           # Generated robots.txt
│  └─ globals.css         # Design tokens + Tailwind theme
├─ components/            # Navbar, Footer, ThemeToggle, ContactForm
└─ lib/site.ts            # Site config and content (projects, posts, skills)
```

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
npm run build    # create a production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

## Customizing

Most content lives in [`src/lib/site.ts`](src/lib/site.ts) — update your name,
tagline, social links, skills, projects, and blog posts there.

## Deploying

The easiest path is [Vercel](https://vercel.com/): push this repository to
GitHub, import it, and every push to the main branch ships to production. The
app also builds to a standard Node server (`npm run build && npm run start`) and
runs anywhere Node.js is supported.
