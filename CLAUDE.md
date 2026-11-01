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

Next.js 14 with the **App Router** (`app/`). TypeScript, `strict` mode. Styling is plain CSS in `app/globals.css` (Tailwind is wired in with preflight off but effectively unused).

- `app/page.tsx` — the entire page. Content (experience log, lab projects, capabilities, FAQ, achievements, contact links) lives in **plain const arrays at the top of this file**. Edit these to change content.
- `app/projects.ts` — the shipped-work cards (`caption` is the one-liner on the card; `description` shows in the lightbox).
- `app/layout.tsx` — root layout, SEO `metadata`, JSON-LD, and the Google Fonts `<link>` (Anton, Geist, Geist Mono, Caveat — loaded by link because Geist isn't in next@14's `next/font` list).
- `app/components/` — client pieces: `SiteNav` (bracket toggle + full-screen numbered menu), `Ticker` (dismissible announcement bar), `ProjectShowcase` (tilted red cards + screenshot lightbox), `BlurList` (scroll blur-reveal list), `GitHubShowcase` (live GitHub fetch with fallback repos), `RevealSection`, `ScrollProgress`. `SwapLabel` renders the `[ label ]` text-swap used by every `.bracket` CTA.
- `app/globals.css` — the "red ink" design system: tokens in `:root` (`--paper`, `--ink`, `--signal`, `--card`, `--pencil`, fonts, `--ease-spring`, `--ease-out`). Square corners, tilt instead of radius, light theme only.
- `public/assets/` — images and `ones-cv.pdf` referenced by absolute paths.

### Conventions / gotchas

- `next.config.mjs` sets `images.unoptimized: true` and allowlists `ghchart.rshah.org`. Any new remote `next/image` host must be added there.
- GitHub username comes from `NEXT_PUBLIC_GITHUB_USERNAME`, falling back to `onesbenrhaime`.
- `tsconfig.json` targets `es5`.

## Unrelated additional directory

The session may include an extra working directory under `primeprofs-admin-new/.../email/templates`. That belongs to a **separate project** (the PrimeProfs admin app) and is not part of this portfolio repo.