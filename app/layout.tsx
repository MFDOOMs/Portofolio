import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
