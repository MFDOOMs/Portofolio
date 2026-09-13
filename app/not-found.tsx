import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * The 404 page, rendered inside the normal site layout so the header and its
 * links still work from a dead URL. Next.js serves it for every unmatched URL
 * with a 404 status and a `noindex` robots tag.
 *
 * It borrows the hero's treatment, inked tape over halftone stock, so a wrong
 * turn still looks like the same site.
 */
export default function NotFound() {
  return (
    // Same id as the home page's main, so the skip link works here too.
    <main id="main" tabIndex={-1} className="halftone-coarse flex-1">
      <Container className="py-section">
        <p className="bg-ink text-paper font-display inline-block px-3 py-1 text-lg tracking-wide uppercase">
          404 — page not found
        </p>

        <h1 className="font-display mt-gutter text-4xl">
          Nothing lives at this address
        </h1>

        <p className="mt-gutter max-w-[62ch] text-xl">
          The link may be out of date or mistyped. The whole portfolio is a
          single page.
        </p>

        <ButtonLink href="/" className="mt-panel">
          Back to the portfolio
        </ButtonLink>
      </Container>
    </main>
  );
}
