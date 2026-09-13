/**
 * The portfolio is a single page, so navigation is a set of in-page anchors
 * rather than routes. Declared in the order the sections appear on the page;
 * each `id` matches the `id` on the rendered section element. The header and
 * the mobile menu both render from this one list.
 */
export const navSections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
] as const;
