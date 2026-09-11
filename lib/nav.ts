/**
 * The portfolio is a single page, so navigation is a set of in-page anchors
 * rather than routes.
 *
 * Sections are built one per development phase, so each entry records whether
 * its target exists on the page yet. Only ready entries are rendered, which
 * keeps the navigation free of links that scroll nowhere. Flipping `ready` is
 * how a section joins the navigation once it is built.
 */
export type NavSection = {
  /** Matches the `id` on the rendered section element. */
  id: string;
  label: string;
  ready: boolean;
};

/** Declared in the order the sections appear on the page. */
export const navSections: readonly NavSection[] = [
  { id: "about", label: "About", ready: true },
  { id: "skills", label: "Skills", ready: true },
  { id: "projects", label: "Projects", ready: false },
  { id: "leadership", label: "Leadership", ready: false },
  { id: "github", label: "GitHub", ready: false },
  { id: "contact", label: "Contact", ready: false },
];

/** The only sections that may be linked to. */
export const readySections = navSections.filter((section) => section.ready);

/**
 * Looks up a section so a call site can adapt to whether it exists yet — a
 * call-to-action can point elsewhere until its target is built.
 */
export function getSection(id: string): NavSection {
  const section = navSections.find((candidate) => candidate.id === id);

  if (!section) {
    throw new Error(`Unknown nav section: ${id}`);
  }

  return section;
}
