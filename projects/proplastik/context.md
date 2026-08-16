# ProPlastik — Engineering Context

> Deep technical/engineering reference for whoever (agent or Ones) is about to work on ProPlastik. Career-facing summary lives in `knowledge/projects.md`; narrative context lives in `CLAUDE.md` §6 — this file is for architecture/ops detail neither of those carries.
> Status tags: **Confirmed** · **Inferred** · **Unknown**. Source priority: CLAUDE.md §11.

## Status flag — read this first
**ProPlastik does not appear anywhere on Ones's current CV** (`mes-docs/cv.md`). Everything below comes from prior conversation, not from a verified document. Before doing any work here, or presenting this project in an official context (CV, LinkedIn, interview), confirm with Ones: is this active, past, freelance, or something else? Don't assume "current professional experience."

## What it is
Company website redesign and migration: Figma design implementation, moving from a legacy WordPress/OVH site to Next.js + Sanity CMS on Vercel, with an SEO-preserving migration.

## Environments — Confirmed (prior conversation, not CV-verified)
- Production domain: **proplastik.tn**
- Vercel preproduction: **proplastik-site.vercel.app**
- DNS: managed through OVH / GoDaddy at different points during the work

## Stack
- Next.js, Sanity CMS, Vercel deployment
- Legacy: WordPress (being migrated away from)

## SEO migration work — Confirmed (prior conversation)
- ~53 URLs preserved via 301 redirects
- Sitemap migrated, robots.txt configured to allow indexing
- New sitemap submitted to Google Search Console
- ~1,099 indexed/search-query keywords audited old vs. new (roughly 400 manually checked at one point)
- An AI agent was discussed/configured to help audit GSC queries and match old-to-new URLs — Unknown whether this became a real running agent or stayed a one-off script/manual process. If it exists, it's a candidate to formalize as a real subagent here (route through `ai-agent-architect` first).

## Infrastructure direction — historical, Unknown if current
DigitalOcean Droplets, Ubuntu, Node.js, PostgreSQL, Redis, Nginx, PM2, Docker, Docker Compose, CircleCI, SSL/firewall config, separate prod + preprod environments. A previously discussed droplet spec: Frankfurt/FRA1, 1 vCPU, 2 GB RAM, 70 GB disk, Ubuntu 22.04. **Do not present these as the current production setup without verifying** — CLAUDE.md §14 already flags this.

## SEO tooling — use the installed `claude-seo` skills, not a bespoke agent

A dedicated ProPlastik "SEO agent" would duplicate capability that's already installed in this environment (`claude-seo` plugin). Per `ai-agent-architect`'s rule of checking for existing capability first: use these directly, feeding them the project facts above so they don't need re-deriving each time.

- **`/seo-google`** — Search Console (Search Analytics, URL Inspection, Sitemaps), PageSpeed/CrUX, GA4 organic traffic. The main tool for "how's the migration doing" — indexing status, query/impression trends, comparing old vs. new. Requires Google API access to be connected; if it isn't, say so rather than guessing at numbers.
- **`/seo-drift`** — baseline + regression detection for SEO-critical page elements (title, meta, canonical, schema, headers). Since the migration already happened, this is the right tool for *ongoing* monitoring — catch a redirect or a meta tag silently breaking on a future deploy. No baseline exists yet (Unknown/not yet run) — capturing one is a real action (crawls the live site) and should be run deliberately, not silently.
- **`/seo-sitemap`** — validate the current XML sitemap against the ~53 preserved URLs / 301 redirect set above.
- **`/seo-technical`** — crawlability, indexability, security headers, mobile, Core Web Vitals, JS rendering — general technical health check, useful for a first full audit if one hasn't been run since the migration.
- **`/seo-schema`** — if/when structured data is added or needs validating; not confirmed as part of the original migration scope.
- **`/seo-hreflang`** — only relevant if ProPlastik ever goes multi-language; not currently known to apply.

Don't invoke any of these against the live `proplastik.tn` domain without Ones's go-ahead for the specific run — they're read-only/low-risk, but this file shouldn't be the trigger for an unprompted crawl of a client's production site.

## Open items (Unknown)
- Current relationship to this project (employment status, freelance, ongoing vs. wrapped up)
- Whether the GSC-audit agent mentioned above was ever actually built
- Current traffic/indexing state post-migration
- Whether the DigitalOcean infra plan was ever deployed, or stayed a plan

See also: `knowledge/projects.md`, `CLAUDE.md` §6, `CLAUDE.md` §14.
