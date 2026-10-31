import type { Metadata } from "next";
import "./globals.css";

// Anton (display), Geist (body), Geist Mono (labels), Caveat (hand-written wall).
// Loaded via <link> because Geist is newer than the font list bundled with next@14.
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@500;700&family=Geist:wght@400;500;700&family=Geist+Mono:wght@400;500&display=swap";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://onesbenrhaime.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ones Land | Ones Ben Rhaime",
    template: "%s | Ones Ben Rhaime"
  },
  description:
    "Welcome to Ones Land — explore the world behind the products of Ones Ben Rhaime, a software engineer building AI-powered educational products and scalable web applications.",
  keywords: [
    "Ones Ben Rhaime",
    "Software Engineer",
    "Full Stack Developer",
    "Product Engineer",
    "React",
    "Next.js",
    "NestJS",
    "AI Integration",
    "EdTech",
    "PrimeProfs"
  ],
  authors: [{ name: "Ones Ben Rhaime" }],
  creator: "Ones Ben Rhaime",
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
    icon: "/assets/ones-land/ones-no-bg.png",
    apple: "/assets/ones-land/ones-no-bg.png"
  },
  openGraph: {
    title: "Ones Land | Ones Ben Rhaime",
    description:
      "Explore the world behind the products — AI-powered educational products and scalable web applications.",
    url: "/",
    siteName: "Ones Land",
    type: "website",
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
    title: "Ones Land | Ones Ben Rhaime",
    description:
      "Explore the world behind the products — AI-powered educational products and scalable web applications.",
    images: ["/assets/ones-banner.png"]
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ones Ben Rhaime",
  url: siteUrl,
  jobTitle: "Software Engineer / Product Engineer",
  description:
    "Software engineer building AI-powered educational products and scalable web applications.",
  sameAs: [
    "https://github.com/onesbenrhaime",
    "https://www.linkedin.com/in/ones-ben-rhaime/"
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
    "AI Integration",
    "EdTech",
    "System Design"
  ]
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
