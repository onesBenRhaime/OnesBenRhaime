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

export const metadata: Metadata = {
  title: "Ones Land | Ones Ben Rhaime",
  description:
    "Welcome to Ones Land — explore the world behind the products of Ones, a software engineer building AI-powered educational products and scalable web applications.",
  openGraph: {
    title: "Ones Land | Ones Ben Rhaime",
    description:
      "Explore the world behind the products — AI-powered educational products and scalable web applications.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
