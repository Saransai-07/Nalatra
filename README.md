# NALATRA Website

Production React application for NALATRA — Smart Software. Real Solutions.

## Stack

- React 19 + TypeScript
- Vite 8
- react-helmet-async (SEO)
- CSS design system (no UI framework lock-in)

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Typecheck + production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint `src` with Oxlint |
| `npm run typecheck` | TypeScript project build check |

## Configuration

Copy `.env.example` to `.env.local` and set:

- `VITE_SITE_URL` — canonical site URL
- `VITE_CONTACT_EMAIL` — contact / mailto address
- `VITE_COMPANY_NAME` — brand name

## Project structure

```
src/
  app/           # App routing shell
  components/    # Layout, sections, UI, SEO
  data/          # Site content (single source of truth)
  hooks/         # Reusable React hooks
  lib/           # Utilities
  pages/         # Route-level pages
  styles/        # Global styles / design tokens
```

## Deploy

Build output is static and can be hosted on Vercel, Netlify, Cloudflare Pages, or any static host.

- Vercel: `vercel.json` SPA rewrite included
- Netlify: `public/_redirects` included

```bash
npm run build
```

Serve the `dist` folder.
