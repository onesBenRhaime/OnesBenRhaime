// All site content lives here. Edit this file to change what the portfolio says.

export type Status = "live" | "beta" | "running" | "shipped";

export type CaseStudy = {
  slug: string;
  title: string;
  kind: "product" | "agents";
  status: Status;
  period: string;
  tagline: string;
  role: string;
  stack: string[];
  problem: string;
  built: string[];
  architecture: string[];
  guardrails?: string[];
  results: string[];
  shots: string[];
  liveUrl?: string;
};

export type ArchiveProject = {
  title: string;
  period?: string;
  context: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  shots?: string[];
};

export const profile = {
  name: "Ones Ben Rhaime",
  handle: "ones",
  title: "Full-Stack Product Engineer",
  company: "MK Talent",
  location: "Tunis, Tunisia",
  headline: "I build products — and the AI agents that run them.",
  intro:
    "Full-stack engineer working across React, Next.js, NestJS and PostgreSQL. I ship EdTech and SaaS products end to end, and design agent systems that audit, decide and fix — with a human approving every action.",
  email: "ones.benrhaime@gmail.com",
  github: "https://github.com/onesBenRhaime",
  linkedin: "https://www.linkedin.com/in/ones-ben-rhaime/",
  cv: "/assets/ones-cv.pdf"
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "primeprofs",
    title: "PrimeProfs",
    kind: "product",
    status: "live",
    period: "2024 — now",
    tagline: "Franco-Tunisian EdTech platform connecting students and teachers.",
    role: "Full-Stack Product Engineer at MK Talent — frontend, backend and database, end to end.",
    stack: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Redis", "WebSocket", "Stripe", "PayPal", "AWS S3", "Docker", "React Native"],
    problem:
      "Students need a simple way to find a teacher, book a course, pay, and keep learning between sessions. Teachers and admins need tools to run all of that without friction.",
    built: [
      "Features for three audiences: students, teachers and admins",
      "Course booking calendar, student–teacher messaging and real-time notifications",
      "Purchases, billing and a credit system with Stripe and PayPal",
      "AI-based adaptive-learning features inside the learning experience",
      "The PrimeProfs mobile app in React Native, built from scratch — now in testing"
    ],
    architecture: [
      "Next.js frontends (student app and admin panel) talking to a NestJS API",
      "NestJS organised in one module per domain (students, teachers, bookings…)",
      "PostgreSQL for data, Redis and WebSockets for real-time features",
      "Files on S3-compatible storage, services shipped with Docker"
    ],
    results: [
      "In production and used by students and teachers",
      "Ongoing work on performance, security and code quality",
      "Public usage metrics: not published yet"
    ],
    shots: []
  },
  {
    slug: "tracizo",
    title: "TRACIZO",
    kind: "product",
    status: "beta",
    period: "2026",
    tagline: "All-in-one SaaS for independent restaurants in Tunisia.",
    role: "Product and engineering — from discovery and architecture to backend, demo and launch plan.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "PDF"],
    problem:
      "Independent restaurants track purchases, preparation, stock and sales on paper or in scattered spreadsheets, so they rarely know their real food cost or what is left.",
    built: [
      "Marketing site, multilingual launch page and beta signup with lead storage",
      "Interactive demo with 12 modules in French and Arabic (right-to-left)",
      "Backend: accounts and permissions, purchases, production, stock split between storeroom and service, sales and payments",
      "End-of-day closing, Tunisian invoices and credit notes, PDFs with an integrity proof, accounting export",
      "Internal back-office plan for accounts, access, subscriptions and support"
    ],
    architecture: [
      "Separate deploys: static marketing site, authenticated app, back-office",
      "NestJS modular monolith with a versioned API — one transaction across sales, stock and invoices",
      "Shared multi-tenant PostgreSQL schema; the API checks permissions on every call",
      "Background worker for exports, emails and documents when volume needs it"
    ],
    results: [
      "Backend modules tested on staging; database backup validated",
      "Next: pilot with real restaurants, tax validation and the production frontend"
    ],
    shots: ["/assets/projects/tracizo/1.svg"]
  },
  {
    slug: "primeprofs-seo-os",
    title: "PrimeProfs SEO OS",
    kind: "agents",
    status: "running",
    period: "2026",
    tagline: "An SEO operating system: real data in, evidence-backed tickets out.",
    role: "Designed and built the whole system — data pipeline, detectors, agent specs and guardrails.",
    stack: ["Python", "Node.js", "Supabase", "Search Console API", "GA4 API", "DataForSEO", "Claude Code"],
    problem:
      "SEO decisions were made on gut feeling, spread across spreadsheets, with no memory of what was decided or why — and AI tools happily invent numbers.",
    built: [
      "Collectors for Search Console, GA4, WordPress (read-only) and redirect traces",
      "Rule-based detectors: cannibalisation, CTR gaps, tracking gaps, missing metadata, stale content",
      "Decision records with evidence, a ranked opportunity list and a weekly brief",
      "Ticket queue for 7 specialised agents, each with a spec, a prompt and an evaluation",
      "CEO dashboard to approve or reject every proposed action"
    ],
    architecture: [
      "Collect → Detect → Decide → Brief → Approve → Work, each step a file on disk",
      "No LLM API calls: detection is deterministic; the reasoning agent is the coding agent reading the repo",
      "Supabase memory with idempotent writes and an audit log",
      "One fresh Claude Code session per ticket"
    ],
    guardrails: [
      "Every action starts as a proposal and needs human approval",
      "Paid API calls need an approved request, plus per-run, daily and monthly caps enforced in code",
      "The live WordPress site is read-only — the only write is a draft a human republishes",
      "Memory writes reject unsourced data and prompt-injection payloads"
    ],
    results: [
      "Running on primeprofs.fr: 92 URLs mapped into 25 topic clusters",
      "Market data spend kept to cents per run"
    ],
    shots: ["/assets/projects/primeprofs-seo-os/1.svg"]
  },
  {
    slug: "seo-agent-team",
    title: "SEO Agent Team",
    kind: "agents",
    status: "running",
    period: "2026",
    tagline: "A Claude Code agent team that audits a site and fixes what you approve.",
    role: "Designed the orchestrator, wrote the 5 custom agents and the business rules.",
    stack: ["Claude Code", "Subagents", "Search Console API", "Python", "Next.js"],
    problem:
      "After the ProPlastik migration, the site needed regular SEO checks — redirects, indexing, content, schema — without a manual audit every time.",
    built: [
      "An orchestrator skill with modes: check, audit, tickets and implement",
      "5 custom agents: Search Console analyst, migration guardian, ticket writer, frontend dev, QA lead",
      "10 reused SEO specialists running in parallel (technical, content, schema, performance, GEO…)",
      "A weighted health score and a run history to compare audits over time"
    ],
    architecture: [
      "Wave 1: data agents · Wave 2: specialists in parallel · Wave 3: ticket writer",
      "Each agent writes its report to the run folder; the orchestrator merges them",
      "Approved ticket → frontend-dev agent edits locally → QA agent builds and answers PASS or BLOCK"
    ],
    guardrails: [
      "Every finding needs evidence",
      "Business rules shared with every agent (no prices, no testimonial edits)",
      "No git, no deploy, no DNS or Search Console writes — a human ships"
    ],
    results: [
      "Used on proplastik.tn; designed to be reused on other sites through a config file"
    ],
    shots: ["/assets/projects/proplastik-seo-team/1.svg"]
  },
  {
    slug: "proplastik",
    title: "ProPlastik",
    kind: "product",
    status: "live",
    period: "MK Talent",
    tagline: "WordPress to Next.js migration without losing search traffic.",
    role: "Built and migrated the site as part of my MK Talent work — design to DNS cutover.",
    stack: ["Next.js", "Sanity CMS", "Vercel", "Figma", "Search Console"],
    problem:
      "A company site on legacy WordPress was slow and hard to edit. Rebuilding it risked losing years of search rankings.",
    built: [
      "Figma design implemented in Next.js with Sanity CMS",
      "Existing URLs preserved with 301 redirects, new sitemap and robots.txt",
      "DNS cutover and deployment on Vercel",
      "Search Console audit comparing old vs. new queries and pages"
    ],
    architecture: [
      "Next.js on Vercel, content in Sanity",
      "Redirect map from the legacy WordPress URLs to the new routes"
    ],
    results: [
      "Lighthouse: 100 Performance · 96 Accessibility · 100 Best Practices · 100 SEO",
      "Up from 60 / 70 / 90 / 60 on the legacy site"
    ],
    shots: [],
    liveUrl: "https://proplastik.tn"
  }
];

export const archive: ArchiveProject[] = [
  {
    title: "Orange Test",
    period: "2022",
    context: "Orange Digital Center",
    description: "Recruitment and assessment platform: candidates, question banks, scheduled sessions, auto-graded tests.",
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://orange-test.vercel.app/",
    shots: ["/assets/projects/orange-test/1.png", "/assets/projects/orange-test/2.png", "/assets/projects/orange-test/3.png", "/assets/projects/orange-test/4.png"]
  },
  {
    title: "Smartovate",
    period: "2024",
    context: "Caustaza Group",
    description: "SaaS for business-process digitalisation: UX/UI integration, frontend, SEO and performance work.",
    stack: ["Next.js", "React", "Tailwind", "Django"],
    liveUrl: "https://smartovate.io",
    shots: ["/assets/projects/smartovate/1.jpg", "/assets/projects/smartovate/2.jpg"]
  },
  {
    title: "Esprit Network",
    period: "2023 — 2024",
    context: "ESPRIT",
    description: "Online test platform: question management, automatic test generation, anti-cheat measures.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    shots: ["/assets/projects/esprit-network/1.png", "/assets/projects/esprit-network/2.png", "/assets/projects/esprit-network/3.png", "/assets/projects/esprit-network/4.png"]
  },
  {
    title: "E-Commerce Platform",
    context: "Personal",
    description: "Product catalog, live search, wishlist and authentication.",
    stack: ["Next.js"],
    liveUrl: "https://full-stack-onboarding.vercel.app",
    shots: ["/assets/projects/ecommerce/1.png", "/assets/projects/ecommerce/2.png", "/assets/projects/ecommerce/3.png", "/assets/projects/ecommerce/4.png"]
  },
  {
    title: "Campus Living Spaces",
    period: "2023 — 2024",
    context: "ESPRIT",
    description: "Student-housing management with microservices: residences, rooms, reservations, occupancy dashboards.",
    stack: ["Angular", "Spring Boot", "Node.js", "MySQL"],
    githubUrl: "https://github.com/onesBenRhaime/MiniProject-Angular-Spring-GestionFoyer",
    shots: ["/assets/projects/campus-living/1.png", "/assets/projects/campus-living/2.png", "/assets/projects/campus-living/3.png", "/assets/projects/campus-living/4.png"]
  },
  {
    title: "CI/CD Pipeline",
    period: "2023 — 2024",
    context: "ESPRIT",
    description: "Jenkins and Docker pipeline with Prometheus and Grafana monitoring and email alerts.",
    stack: ["Jenkins", "Docker", "Prometheus", "Grafana"]
  },
  {
    title: "Le Paysan",
    period: "2023",
    context: "Paysan du Cap Bon",
    description: "Billing automation: articles, staff, documents, automatic HT / TVA / stamp totals, printable reports.",
    stack: ["Symfony 5", "PHP", "MySQL"],
    githubUrl: "https://github.com/onesBenRhaime/paysan-admin",
    shots: ["/assets/projects/paysan/1.jpg", "/assets/projects/paysan/2.jpg", "/assets/projects/paysan/3.jpg", "/assets/projects/paysan/4.jpg"]
  },
  {
    title: "MazeBank",
    period: "2022 — 2023",
    context: "ESPRIT",
    description: "Multi-client banking app: JavaFX, Symfony and CodenameOne clients over one MySQL database.",
    stack: ["Symfony", "JavaFX", "CodenameOne", "MySQL"],
    githubUrl: "https://github.com/onesBenRhaime/MazeBank--Scared-To-Compile"
  }
];

export const experience = [
  { period: "09/2024 — now", role: "Full-Stack Product Engineer", org: "MK Talent", note: "PrimeProfs (web + mobile), ProPlastik, AI and SEO agent systems." },
  { period: "06 — 08/2024", role: "Frontend & API Developer (intern)", org: "Caustaza Group", note: "Smartovate SaaS — Next.js, React, Django, SEO and performance." },
  { period: "07 — 08/2023", role: "Web Developer (intern)", org: "Paysan du Cap Bon", note: "Billing automation with Symfony 5 and MySQL." },
  { period: "07 — 09/2022", role: "Frontend React Developer (intern)", org: "BMC", note: "Admin dashboard and scheduling for an e-health platform." },
  { period: "02 — 06/2022", role: "Full-Stack JS Developer (intern)", org: "Orange Digital Center", note: "MERN recruitment platform: auth, profiles, technical tests." },
  { period: "08 — 09/2021", role: "Software Testing (intern)", org: "BIAT", note: "Automated functional tests with Java and Katalon Studio." },
  { period: "06 — 07/2021", role: "Web Developer (intern)", org: "Cloud Master Tunisie", note: "Educational platform for learning programming." }
];

export const education = [
  { year: "2025", title: "Computer Engineering Degree — Mention Très Bien", school: "ESPRIT" },
  { year: "2022", title: "Licence in Computer Technologies — Mention Bien", school: "ISET" }
];

export const achievements = [
  "2nd place — ATS Problem Solving Hackathon 2025",
  "3rd place — ATS Problem Solving Hackathon 2024"
];

export const stack: Record<string, string[]> = {
  frontend: ["React", "Next.js", "TypeScript", "React Native", "Tailwind"],
  backend: ["NestJS", "Node.js", "Express", "Python", "REST", "WebSocket"],
  data: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "Supabase"],
  ops: ["Docker", "Vercel", "GitLab CI/CD", "Jenkins"],
  ai: ["Claude Code", "Agent design", "Search Console / GA4 APIs"]
};
