# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal portfolio / landing site for "Ones Ben Rhaime" (`ones-personal-landing`). Static marketing content with one interactive client component that pulls live GitHub data.

## Commands

```bash
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # next lint (eslint-config-next, core-web-vitals)
```

There is no test suite.

## Architecture

Next.js 14 with the **App Router** (`app/`). TypeScript, `strict` mode, no CSS framework.

- `app/page.tsx` — the entire page. All content (projects, experiences, skill groups, impact items, achievements) lives in **plain const arrays at the top of this file** and is rendered inline. To change site content, edit these arrays — there is no CMS or data layer.
- `app/layout.tsx` — root layout and SEO `metadata` (title, description, OpenGraph).
- `app/components/GitHubShowcase.tsx` — the only `"use client"` component. Client-side fetches `api.github.com` for the user's repos/profile and degrades to hardcoded `FallbackRepo` entries on failure (GitHub's unauthenticated API is rate-limited). The contribution graph is an external image from `ghchart.rshah.org`.
- `app/globals.css` — all styling (~700 lines), driven by CSS custom properties in `:root`. Class names in JSX map directly to selectors here; no CSS modules or utility classes.
- `public/assets/` — images and `ones-cv.pdf` referenced by absolute paths (e.g. `/assets/ones-banner.png`).

### Conventions / gotchas

- `next.config.mjs` sets `images.unoptimized: true` and allowlists `ghchart.rshah.org` under `remotePatterns`. Any new remote `next/image` host must be added there.
- GitHub username comes from `NEXT_PUBLIC_GITHUB_USERNAME`, falling back to `onesbenrhaime`.
- A legacy `pages/` directory still holds `_app.tsx` and `_document.tsx` from the Pages Router. The App Router is the active system; these files are vestigial and not where page content lives.
- `tsconfig.json` targets `es5`.

## Unrelated additional directory

The session may include an extra working directory under `primeprofs-admin-new/.../email/templates`. That belongs to a **separate project** (the PrimeProfs admin app) and is not part of this portfolio repo.