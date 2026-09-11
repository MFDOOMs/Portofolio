import { About } from "@/components/sections/About";
import { GitHub } from "@/components/sections/GitHub";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    // `tabIndex` lets the skip link move keyboard focus here, not just scroll.
    <main id="main" tabIndex={-1} className="flex-1">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Leadership />
      <GitHub />
    </main>
  );
}
