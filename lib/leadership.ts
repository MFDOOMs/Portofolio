/**
 * Leadership-section content, taken from the Leadership & Organizations block
 * of Tristan's CV. Role bullets keep the CV's wording.
 *
 * Where the CV and the original project specification disagree, the CV wins:
 * the department is six people including him, the program is the Character
 * Building Season (CBS), and no attendance figure is claimed because none is
 * documented.
 */
export type Role = {
  /** Stable identifier; also builds the heading id. */
  slug: string;
  title: string;
  org: string;
  /** ISO year-month, e.g. "2026-02". */
  start: string;
  /** ISO year-month; absent while the role is ongoing. */
  end?: string;
  bullets: readonly string[];
};

export const leadership = {
  organization:
    "HIMATIF, the Informatics Engineering Student Association at Universitas Padjadjaran",
  program:
    "Character Building Season (CBS), the orientation program for all incoming Informatics Engineering students",

  /** Newest first, the order they appear on the page. */
  roles: [
    {
      slug: "head-of-cadre",
      title: "Head of Cadre Department",
      org: "HIMATIF",
      start: "2026-02",
      bullets: [
        "Lead a six-person department responsible for the 2026 Character Building Season (CBS), the orientation program for all incoming Informatics Engineering students.",
        "Define the program concept, learning objectives, and timeline, delegating ownership across five staff members and coordinating with other departments to keep delivery on schedule.",
        "Coach the team using experience gained as both staff member and mentor in the previous cycle, carrying what worked in 2025 into the 2026 program.",
      ],
    },
    {
      slug: "cbs-mentor",
      title: "Mentor — Character Building Season",
      org: "HIMATIF",
      start: "2025-08",
      end: "2025-10",
      bullets: [
        "Guided eight first-year students through academic and social integration across a three-month orientation cycle.",
        "Ran regular check-ins on coursework and campus adjustment, connecting mentees to the resources, communities, and senior students they needed.",
        "Reported group progress and recurring obstacles to the committee, informing adjustments made while the program was still running.",
      ],
    },
    {
      slug: "cadre-staff",
      title: "Staff of Cadre Department",
      org: "HIMATIF",
      start: "2025-02",
      end: "2025-12",
      bullets: [
        "Collaborated within a nine-person team to concept and prepare the orientation program for new Informatics Engineering students.",
        "Contributed to session design and material preparation, and supported execution across the full program cycle.",
      ],
    },
  ] satisfies readonly Role[],

  /** The CV's "soft & interdisciplinary" skills. */
  softSkills: [
    "Cross-Functional Team Leadership",
    "Mentoring",
    "Program Planning",
    "Event Management",
  ],
} as const;
