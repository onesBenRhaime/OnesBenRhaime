export type Project = {
  slug: string;
  title: string;
  label: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  shots: string[];
};

export const districtProjects: Project[] = [
  {
    slug: "orange-test",
    title: "Orange Test",
    label: "Built at Orange Digital Center",
    description:
      "An assessment platform for Orange Digital Center: manage collaborators, candidates and question banks, schedule evaluation sessions and run auto-graded online tests from a single admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://orange-test.vercel.app/",
    shots: [
      "/assets/projects/orange-test/1.png",
      "/assets/projects/orange-test/2.png",
      "/assets/projects/orange-test/3.png",
      "/assets/projects/orange-test/4.png"
    ]
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Platform",
    label: "Full-Stack Shop",
    description:
      "A full-stack e-commerce experience with a product catalog, live search, wishlist and authentication — from browsing new arrivals to a smooth shopping flow.",
    tags: ["Full Stack", "Next.js", "E-Commerce"],
    liveUrl: "https://full-stack-onboarding.vercel.app",
    shots: [
      "/assets/projects/ecommerce/1.png",
      "/assets/projects/ecommerce/2.png",
      "/assets/projects/ecommerce/3.png",
      "/assets/projects/ecommerce/4.png"
    ]
  },
  {
    slug: "smartovate",
    title: "Smartovate",
    label: "AI Time-Tracking & Project Automation",
    description:
      "An AI-powered time-tracking and project-management product for startups and teams — smart tracking, project automation and productivity tooling. Built as a full-stack developer during my internship.",
    tags: ["React", "SaaS", "AI"],
    liveUrl: "https://smartovate.io",
    shots: [
      "/assets/projects/smartovate/1.jpg",
      "/assets/projects/smartovate/2.jpg"
    ]
  },
  {
    slug: "esprit-network",
    title: "Esprit Network",
    label: "Recruitment & Talent Assessment",
    description:
      "A recruitment platform connecting companies with candidates — publish job offers, build custom online tests from question banks, evaluate applicants and manage digital CVs, all backed by reporting for hiring teams.",
    tags: ["React", "Recruitment", "Online Assessment"],
    shots: [
      "/assets/projects/esprit-network/1.png",
      "/assets/projects/esprit-network/2.png",
      "/assets/projects/esprit-network/3.png",
      "/assets/projects/esprit-network/4.png"
    ]
  },
  {
    slug: "campus-living",
    title: "Campus Living Spaces",
    label: "Housing Management · Angular + Spring",
    description:
      "A student-housing management system for universities: administer residences, blocks, rooms, students and reservations, with analytics dashboards and charts to track occupancy.",
    tags: ["Angular", "Spring Boot", "Dashboard"],
    githubUrl:
      "https://github.com/onesBenRhaime/MiniProject-Angular-Spring-GestionFoyer",
    shots: [
      "/assets/projects/campus-living/1.png",
      "/assets/projects/campus-living/2.png",
      "/assets/projects/campus-living/3.png",
      "/assets/projects/campus-living/4.png"
    ]
  },
  {
    slug: "paysan",
    title: "Le Paysan",
    label: "Billing Automation · Paysan du Cap Bon",
    description:
      "A billing and invoicing automation platform for a cheese producer: manage articles, staff and documents, and generate invoices with automatic HT / TVA / stamp totals and printable reports — all from an admin dashboard.",
    tags: ["Symfony 5", "MySQL", "PHP"],
    githubUrl: "https://github.com/onesBenRhaime/paysan-admin",
    shots: [
      "/assets/projects/paysan/1.jpg",
      "/assets/projects/paysan/2.jpg",
      "/assets/projects/paysan/3.jpg",
      "/assets/projects/paysan/4.jpg"
    ]
  },
  {
    slug: "proplastik",
    title: "ProPlastik",
    label: "Website Redesign & SEO Migration",
    description:
      "A company website redesign and migration from a legacy WordPress site to Next.js and Sanity CMS: implemented the Figma design, ran an SEO-preserving migration with redirects for existing URLs, handled the DNS cutover and deployed the new site on Vercel. Optimized performance, accessibility and SEO to perfect Lighthouse scores on both mobile and desktop — 100 Performance, 96 Accessibility, 100 Best Practices and 100 SEO, up from 60 / 70 / 90 / 60 on the legacy site.",
    tags: ["Next.js", "SEO", "Performance"],
    liveUrl: "https://proplastik.tn",
    shots: [
      "/assets/projects/proplastik/1.png",
      "/assets/projects/proplastik/2.png"
    ]
  }
];
