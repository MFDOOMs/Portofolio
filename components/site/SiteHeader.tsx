import { MobileNav } from "@/components/site/MobileNav";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { readySections } from "@/lib/nav";
import { site } from "@/lib/site";

/**
 * Sticky page header: the name on the left, section anchors and the GitHub
 * call-to-action on the right.
 *
 * The bar is filled with solid page stock and separated by a hard rule rather
 * than a blur or shadow, so it reads as the top edge of the printed page.
 * Only the mobile disclosure needs client JavaScript; it is isolated in
 * `MobileNav` so the rest of the header stays a Server Component.
 *
 * The section list hides below `lg`, where six links and the name stop fitting
 * on one line, using `max-lg:hidden` rather than `hidden lg:block`: one utility
 * that states the intent instead of setting a default and overriding it. Below
 * `sm` the GitHub button hides as well and moves into the menu, so the name
 * never has to wrap inside the fixed-height bar.
 */
export function SiteHeader() {
  return (
    <header className="border-ink bg-paper sticky top-0 z-50 border-b-2">
      <Container>
        <div className="gap-gutter h-header flex items-center justify-between">
          <a
            href="#top"
            className="font-display hover:text-brass-deep text-lg whitespace-nowrap transition sm:text-xl"
          >
            {site.name}
          </a>

          <div className="gap-gutter flex items-center">
            {readySections.length > 0 ? (
              <nav aria-label="Sections" className="max-lg:hidden">
                <ul className="flex items-center gap-2">
                  {readySections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="hover:bg-ink hover:text-paper px-2 py-1 text-sm font-semibold uppercase transition"
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}

            <ButtonLink
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              variant="outline"
              size="sm"
              className="max-sm:hidden"
            >
              GitHub
              <span className="sr-only"> profile (opens in a new tab)</span>
            </ButtonLink>

            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
