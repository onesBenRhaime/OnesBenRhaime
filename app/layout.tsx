import type { Metadata } from "next";
import "./globals.css";

// Anton (display), Geist (body), Geist Mono (labels), Caveat (hand-written wall).
// Loaded via <link> because Geist is newer than the font list bundled with next@14.
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@500;700&family=Geist:wght@400;500;700&family=Geist+Mono:wght@400;500&display=swap";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://ones-benrhaime.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ones Ben Rhaime — Full-Stack & Product Engineer (React, Next.js, NestJS, AI)",
    template: "%s | Ones Ben Rhaime"
  },
  description:
    "Ones Ben Rhaime is a full-stack product engineer in Tunis building AI-powered products and scalable web apps: React / Next.js frontend, Node.js / NestJS backend, databases, data migration, technical SEO. Open to full-stack, frontend, backend and product engineering roles (remote or on-site).",
  applicationName: "Ones Land",
  keywords: [
    "Ones Ben Rhaime",
    "Full Stack Developer",
    "Full-Stack Engineer",
    "Ingénieur Full Stack",
    "Développeur Full Stack",
    "Product Engineer",
    "Full-Stack Product Engineer",
    "Product Full-Stack Developer",
    "Frontend Developer",
    "Développeur Frontend",
    "Backend Developer",
    "Développeur Backend",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "NestJS Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Database Design",
    "Base de données",
    "PostgreSQL",
    "MongoDB",
    "Data Migration",
    "Migration de données",
    "Technical SEO",
    "AI Engineer",
    "AI Integration",
    "LLM Integration",
    "EdTech",
    "PrimeProfs",
    "Full Stack Developer Tunisia",
    "Développeur Full Stack Tunis",
    "Remote Full Stack Developer"
  ],
  authors: [{ name: "Ones Ben Rhaime", url: siteUrl }],
  creator: "Ones Ben Rhaime",
  category: "technology",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large"
    }
  },
  icons: {
    apple: "/assets/ones-land/ones-no-bg.png"
  },
  openGraph: {
    title: "Ones Ben Rhaime — Full-Stack & Product Engineer",
    description:
      "Full-stack product engineer shipping AI-powered products: React / Next.js, Node.js / NestJS, databases, data migration and SEO.",
    url: "/",
    siteName: "Ones Land",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    type: "profile",
    firstName: "Ones",
    lastName: "Ben Rhaime",
    images: [
      {
        url: "/assets/ones-banner.png",
        width: 1584,
        height: 396,
        alt: "Ones Ben Rhaime — personal brand banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ones Ben Rhaime — Full-Stack & Product Engineer",
    description:
      "Full-stack product engineer shipping AI-powered products: React / Next.js, Node.js / NestJS, databases, data migration and SEO.",
    images: ["/assets/ones-banner.png"]
  }
};

// ProfilePage + Person: what Google and AI assistants read to understand who this is.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Ones Ben Rhaime",
    url: siteUrl,
    email: "mailto:ones.benrhaime@gmail.com",
    image: `${siteUrl}/assets/ones-banner.png`,
    jobTitle: "Full-Stack Product Engineer",
    description:
      "Full-stack product engineer building AI-powered products and scalable web applications — frontend (React, Next.js), backend (Node.js, NestJS), databases, data migration and technical SEO.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tunis",
      addressCountry: "TN"
    },
    worksFor: { "@type": "Organization", name: "PrimeProfs" },
    hasOccupation: [
      "Full-Stack Developer",
      "Product Engineer",
      "Frontend Developer",
      "Backend Developer"
    ].map((name) => ({ "@type": "Occupation", name })),
    sameAs: [
      "https://github.com/onesbenrhaime",
      "https://www.linkedin.com/in/ones-ben-rhaime/"
    ],
    knowsLanguage: ["en", "fr", "ar"],
    knowsAbout: [
      "Full-Stack Development",
      "Product Engineering",
      "Frontend Development",
      "Backend Development",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "TypeScript",
      "REST APIs",
      "Microservices",
      "Database Design",
      "PostgreSQL",
      "MongoDB",
      "Data Migration",
      "Technical SEO",
      "AI Integration",
      "LLM Applications",
      "CI/CD",
      "System Design",
      "EdTech"
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS_URL} />
        <meta name="theme-color" content="#F3F3E9" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
