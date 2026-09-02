import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    // `tabIndex` lets the skip link move keyboard focus here, not just scroll.
    <main id="main" tabIndex={-1} className="flex-1">
      <Hero />
    </main>
  );
}
