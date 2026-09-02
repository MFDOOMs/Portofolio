import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";

import { SiteHeader } from "@/components/site/SiteHeader";
import { site } from "@/lib/site";
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

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
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
