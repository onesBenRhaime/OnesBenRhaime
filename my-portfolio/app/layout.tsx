import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import StatusBar from "./components/StatusBar";
import { profile } from "./data";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://ones-benrhaime.vercel.app";

const description =
  "Ones Ben Rhaime — Full-Stack Product Engineer. EdTech and SaaS products with React, Next.js and NestJS, and AI agent systems with a human in the loop.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`
  },
  description,
  keywords: [
    "Ones Ben Rhaime",
    "Full-Stack Product Engineer",
    "Next.js",
    "NestJS",
    "AI agents",
    "EdTech",
    "PrimeProfs",
    "TRACIZO"
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/assets/ones-land/ones-no-bg.png" },
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description,
    url: "/",
    siteName: profile.name,
    type: "website",
    images: [{ url: "/assets/ones-banner.png", width: 1584, height: 396 }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
    images: ["/assets/ones-banner.png"]
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.title,
  worksFor: { "@type": "Organization", name: profile.company },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["React", "Next.js", "NestJS", "PostgreSQL", "AI agents", "EdTech", "SEO"]
};

// Dark is the default; a stored choice wins.
const themeInitScript = `(function(){try{var t=localStorage.getItem('ones-theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <StatusBar />
        <main id="main">{children}</main>
        <footer className="footer">
          <span>
            <span className="dot dot--live" aria-hidden="true" /> all systems nominal
          </span>
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
        </footer>
      </body>
    </html>
  );
}
