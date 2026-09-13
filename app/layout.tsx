import type { Metadata, Viewport } from "next";
import { Anton, Archivo } from "next/font/google";

import { SiteHeader } from "@/components/site/SiteHeader";
import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

/** Display face — ultra-condensed poster weight, headlines only. */
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

/** Reading face — variable grotesk for every line of actual text. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

/*
 * The Open Graph image, icon, and apple-icon come from the file conventions in
 * this folder (opengraph-image.tsx, icon.svg, apple-icon.tsx); Next.js adds
 * their tags, so they are not repeated here.
 */
export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name, url: site.githubUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Tristan Bonardo",
    lastName: "Silalahi",
    username: site.githubUsername,
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_US",
  },
  // Next.js fills the Twitter title, description, and image in from the Open
  // Graph fields above; only the card type has to be stated.
  twitter: { card: "summary_large_image" },
  // iOS Safari otherwise turns figures like "14,838" into phone-number links.
  formatDetection: { telephone: false },
};

/** Browser chrome takes the page stock's color in each scheme. */
export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e9e0cc" },
    { media: "(prefers-color-scheme: dark)", color: "#12100e" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* First focusable element on the page, revealed only when focused. */}
        <a
          href="#main"
          className="focus:bg-ink focus:text-paper sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-60 focus:px-3 focus:py-2 focus:font-semibold"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
