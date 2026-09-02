"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { readySections } from "@/lib/nav";

/**
 * Section navigation below the `md` breakpoint, where the links do not fit
 * beside the name.
 *
 * The panel drops out of the header rather than covering the page: with a
 * handful of anchors there is nothing to gain from a full-screen overlay, and
 * the page stays visible behind it.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  // Escape closes the panel, matching what a disclosure is expected to do.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // A menu button with an empty menu is a broken control, so render nothing
  // until at least one section exists to link to.
  if (readySections.length === 0) return null;

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((wasOpen) => !wasOpen)}
      >
        Menu
      </Button>

      {/* Positioned against the sticky header, the nearest positioned parent. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-ink bg-plate absolute inset-x-0 top-full border-b-2 md:hidden"
      >
        <Container>
          <ul className="py-gutter grid gap-1">
            {readySections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  className="hover:bg-ink hover:text-paper block px-2 py-2 font-semibold uppercase transition"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
}
