# Aegis Keystone Holdings — Website

Marketing website for **Aegis Keystone Holdings Inc.** built with **Vite + React + TypeScript**.

## What’s inside

- Multi-page marketing site with client-side routing
- Animated page transitions via Framer Motion
- Utility-first styling via Tailwind **CDN** (configured in `index.html`)
- Global base styles in `index.css`

## Tech stack

- Vite 6 + React 19 + TypeScript
- React Router (`HashRouter` for static hosting)
- Framer Motion
- Lucide React (icons)

## Requirements

- Node.js (LTS recommended)
- npm (comes with Node)

## Quick start

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

By default this project runs on **http://localhost:3000** (configured in `vite.config.ts`).

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build production assets into `dist/`
- `npm run preview` — serve the production build locally

## Project structure

- `index.html` — app shell, Tailwind CDN config, fonts, favicon
- `index.css` — global styles (e.g. body background + scrollbar)
- `index.tsx` — React entry
- `App.tsx` — router + layout shell
- `pages/` — route pages
- `components/` — reusable components
- `public/` — static assets (served as-is)

## Routing

Routing is configured with `HashRouter` in `App.tsx`:

- `/` (Home)
- `/about`
- `/portfolio`
- `/partnership`
- `/contact`
- `/insights`

`HashRouter` is friendly to static hosting because it doesn’t require server-side rewrites.

## Environment variables

This project reads `GEMINI_API_KEY` from your local environment and injects it at build time via `vite.config.ts`.

Create `.env.local`:

```bash
GEMINI_API_KEY=your_key_here
```

### Important security note

Any variable injected into client-side code is effectively **public**. Don’t put secrets in browser-shipped env vars.

## Deployment notes

### `index.css` path

`index.html` links the stylesheet as:

```html
<link rel="stylesheet" href="/index.css">
```

That works when hosting from the domain root. If you deploy under a sub-path, change it to a relative link:

```html
<link rel="stylesheet" href="./index.css">
```

## Troubleshooting

### Vite warning: "/index.css doesn't exist at build time"

If you see this during `npm run build`, it means Vite couldn’t find the file at build time and left the link unchanged.

Fix:

- Ensure `index.css` exists at the project root.
- Ensure `index.html` links to it (absolute `/index.css` or relative `./index.css` depending on hosting).

## License

Proprietary / internal use (update if you intend to open source this project).
