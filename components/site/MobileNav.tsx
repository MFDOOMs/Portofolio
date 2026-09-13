"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { newTab } from "@/lib/links";
import { navSections } from "@/lib/nav";
import { site } from "@/lib/site";

/**
 * Section navigation below the `lg` breakpoint, where the links do not fit
 * beside the name.
 *
 * The panel drops out of the header rather than covering the page: with a
 * handful of anchors there is nothing to gain from a full-screen overlay, and
 * the page stays visible behind it. Below `sm` the header's GitHub button gives
 * its room to the name, so the panel carries that link instead.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Escape closes the panel and hands focus back to the button, so keyboard
  // focus is never left on a link that has just been hidden.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <Button
        ref={buttonRef}
        variant="outline"
        size="sm"
        className="lg:hidden"
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
        className="border-ink bg-plate absolute inset-x-0 top-full border-b-2 lg:hidden"
      >
        <Container>
          <ul className="py-gutter grid gap-1">
            {navSections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`/#${section.id}`}
                  prefetch={false}
                  onClick={() => setOpen(false)}
                  className="hover:bg-ink hover:text-paper block px-2 py-2 font-semibold uppercase transition"
                >
                  {section.label}
                </Link>
              </li>
            ))}
            <li className="border-ink mt-2 border-t-2 pt-3 sm:hidden">
              <a
                href={site.githubUrl}
                className="hover:bg-ink hover:text-paper block px-2 py-2 font-semibold uppercase transition"
                {...newTab}
              >
                GitHub profile
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}
