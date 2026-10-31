# Preferences

> Status tags: **Confirmed** · **Inferred** · **Unknown**. See CLAUDE.md "Source of truth" for source priority.
> These are working preferences (how Ones likes things built/decided), distinct from communication style — see [communication.md](communication.md).

## Engineering preferences — Confirmed
- Cookies over localStorage for authentication tokens. Keep this unless she explicitly changes it (CLAUDE.md "Engineering work").
- Prefers incremental, focused changes over broad rewrites (CLAUDE.md "Engineering work").
- Prefers practical solutions over unnecessary complexity (CLAUDE.md "Rules").

## AI-agent design preferences — Confirmed (stated design philosophy)
- Agents should have a clear objective, defined inputs/outputs/tools/permissions, and explicit failure modes (CLAUDE.md "Designing agents").
- Prefer structured outputs over free text.
- Keep secrets/API keys out of prompts and source files.
- Never fabricate data when a connected service could be queried instead.
- Build step by step / phase by phase rather than one large agent upfront — see [goals.md](goals.md).

## Working-with-Claude-Code preferences — Confirmed
- Wants explicit context, stated constraints, acceptance criteria before code changes.
- Wants facts separated from assumptions, and assumptions labeled.
- Wants the existing codebase inspected before architecture changes.
- Wants conservative handling of anything that could affect production.

## Open items (Unknown)
- Preferred code review style (line-by-line vs. summary)
- Preferred level of autonomy for Claude Code (ask before every change vs. batch and report)
