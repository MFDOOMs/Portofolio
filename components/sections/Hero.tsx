import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { newTab } from "@/lib/links";
import { site } from "@/lib/site";

/**
 * Opening statement: one strip of inked tape, the name at poster size, and
 * the things a visitor is most likely to want next, in order of weight: the
 * GitHub profile, the CV, then the projects further down the page.
 *
 * The halftone field runs only here — the loud moment on the page is the
 * first screen, and every section after it sits on plain stock.
 */
export function Hero() {
  return (
    <section id="top" className="halftone-coarse border-ink border-b-2">
      <Container className="py-section">
        <p className="bg-ink text-paper font-display inline-block px-3 py-1 text-lg tracking-wide uppercase">
          Informatics Engineering student
        </p>

        <h1 className="font-display mt-gutter text-5xl">{site.name}</h1>

        <p className="mt-gutter max-w-[62ch] text-xl">
          Head of the Cadre Department at HIMATIF since February 2026.
          Everything I build and lead, collected in one place.
        </p>

        <div className="gap-gutter mt-panel flex flex-wrap items-center">
          <ButtonLink href={site.githubUrl} {...newTab}>
            View GitHub profile
            <span className="sr-only"> (opens in a new tab)</span>
          </ButtonLink>

          <ButtonLink variant="outline" href={site.cvUrl} {...newTab}>
            View CV
            <span className="sr-only"> (opens Google Drive in a new tab)</span>
          </ButtonLink>

          {/* Below `sm` this wraps onto its own line, where the side padding
              that widens its hit area would indent it from the buttons above. */}
          <ButtonLink variant="quiet" href="#projects" className="max-sm:px-0">
            See projects
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
