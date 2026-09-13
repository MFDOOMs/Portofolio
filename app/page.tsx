import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { GitHub } from "@/components/sections/GitHub";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Structured data describing who the page is about, for search engines and
 * assistants. Every field repeats a fact already shown on the page.
 */
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: getSiteUrl().href,
  description: site.description,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sumedang",
    addressRegion: "West Java",
    addressCountry: "ID",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Padjadjaran",
  },
  sameAs: [site.githubUrl, site.linkedinUrl],
};

export default function Home() {
  return (
    // `tabIndex` lets the skip link move keyboard focus here, not just scroll.
    <main id="main" tabIndex={-1} className="flex-1">
      <script
        type="application/ld+json"
        // Escaping "<" keeps any string in the data from closing the tag.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Leadership />
      <GitHub />
      <Contact />
    </main>
  );
}
