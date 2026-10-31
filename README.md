# Ones Ben Rhaime — Personal Copilot

A Claude Code workspace that acts as a technical and career copilot for Ones Ben Rhaime (Full-Stack Product Engineer, MK Talent / PrimeProfs).

## Structure

```
CLAUDE.md            How Claude should work: rules, tone, source priority, agent routing
knowledge/           Facts about Ones (profile, experience, skills, projects, career…)
mes-docs/            CV (source of truth) and application drafts
projects/            Engineering context per product (PrimeProfs, ProPlastik, template)
.claude/agents/      Specialist subagents: career, technical mentor, agent architect, coding
my-portfolio/        Source of the public portfolio site (Next.js + Tailwind)
```

## How it works

Open this folder in Claude Code. Claude reads `CLAUDE.md`, routes the request to the right agent, and that agent reads only the `knowledge/` or `projects/` files it needs.

## Keeping it up to date

- New CV → replace `mes-docs/cv.md`, then update the matching `knowledge/` files.
- New project → copy `projects/_template/` to `projects/<name>/`.
- New agent → add `.claude/agents/<name>.md` and a row to the Routing table in `CLAUDE.md`.

## Portfolio

```
cd my-portfolio
npm install
npm run dev
```
