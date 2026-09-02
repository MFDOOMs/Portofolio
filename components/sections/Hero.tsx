import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getSection } from "@/lib/nav";
import { site } from "@/lib/site";

/**
 * The projects call-to-action points at the in-page section once that section
 * exists, and at the GitHub repository list until then, so the control is
 * never a link to nothing.
 */
const projects = getSection("projects");
const projectsCta = projects.ready
  ? { href: `#${projects.id}`, label: "See projects", external: false }
  : {
      href: site.githubReposUrl,
      label: "See projects on GitHub",
      external: true,
    };

const newTab = { target: "_blank", rel: "noreferrer noopener" } as const;

/**
 * Opening statement: one strip of inked tape, the name at poster size, and
 * the two things a visitor is most likely to want next.
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

          <ButtonLink
            variant="outline"
            href={projectsCta.href}
            {...(projectsCta.external ? newTab : {})}
          >
            {projectsCta.label}
            {projectsCta.external ? (
              <span className="sr-only"> (opens in a new tab)</span>
            ) : null}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
