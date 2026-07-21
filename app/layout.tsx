import type { Metadata } from "next";
import { JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap"
});

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

const themeInitScript = `(function(){try{var t=localStorage.getItem('ones-theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${caveat.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
