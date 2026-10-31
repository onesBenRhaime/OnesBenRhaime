# PrimeProfs — Engineering Context

> Deep technical/engineering reference for whoever (agent or Ones) is about to work on PrimeProfs code. Career-facing summary lives in `knowledge/projects.md` — this file is the full engineering reference for the project.
> Status tags: **Confirmed** · **Inferred** · **Unknown**. Source priority: CLAUDE.md "Source of truth".

## What it is
Franco-Tunisian EdTech platform connecting students and teachers. Ones builds it as **Full-Stack Product Engineer at MK Talent** (MK Talent is the employer; PrimeProfs is the product — see `knowledge/experience.md`). Current role since 09/2024 — Confirmed (CV).

## Repos observed in this environment — Confirmed (directory access, not a stated architecture doc)
This looks like a **multi-repo setup**, not a monorepo — three separate codebases have been accessible in-session:
- `primeprofs-admin-new` — admin panel. Known path: `src/components/email/templates` (email template components for admin-triggered comms).
- `primeprofs-app-v2` — the main app. Known path: `src/features/ai-learning/hooks` (React hooks for the AI-learning feature area — this is likely where adaptive-learning/AI functionality lives).
- `primeprofs-back` — backend. Known path: `src/modules/student` (NestJS module-per-domain pattern — expect `src/modules/<domain>` for other entities: teacher, booking, billing, etc., though only `student` has been directly observed).

When `coding-agent` works on any of these, it should read that specific repo's own `CLAUDE.md`/`README.md` first — this file is a cross-repo orientation aid, not a replacement for it.

## Stack — Confirmed (CV + projects/primeprofs/context.md)
- Frontend: Next.js, React, TypeScript
- Backend: NestJS, PostgreSQL, Redis, WebSocket
- Payments: Stripe, PayPal
- Storage: AWS S3
- Deployment: Docker

## Features — Confirmed direction (projects/primeprofs/context.md), per-feature ownership Unknown
Authentication, course reservation/booking calendar, student/professor messaging, real-time communication, resources, notifications, purchase/billing, credit system, first-course-free, AI-assisted educational features (adaptive learning — Confirmed on CV; quiz/flashcard/exercise generation — discussed/explored, not confirmed as shipped).

## AI direction
Adaptive-learning features: **Confirmed as something she's directly designed/built** (CV: "Participation à la conception et au développement de fonctionnalités d'apprentissage adaptatif basées sur l'IA"). Subject-specific AI assistants, quiz/flashcard/exercise generation, OpenAI/Gemini integration, cost control: discussed as product direction — Unknown whether shipped or still exploratory. Ask before presenting these as delivered features.

## Open items (Unknown)
- Full list of backend modules (only `student` observed)
- Current environments (staging/prod URLs, hosting for the backend — Vercel confirmed for frontends generally per CLAUDE.md, but not confirmed specifically for PrimeProfs)
- CI/CD setup for this specific product (CLAUDE.md's CircleCI/GitLab CI/CD mentions are general skill claims, not confirmed as PrimeProfs' actual pipeline)
- Team size / whether she owns this alone or with others

See also: `knowledge/experience.md`, `knowledge/projects.md`.
