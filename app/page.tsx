import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
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
    </main>
  );
}
