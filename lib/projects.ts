/**
 * Project showcase content, drawn from the READMEs of Tristan's public
 * repositories on github.com/MFDOOMs. Every figure below appears in the linked
 * repository; none is estimated.
 *
 * Team projects state his part in `role`, taken from the team section of that
 * project's own README, so a card never credits him with a teammate's work.
 */

export type ProjectCategory = "Machine learning" | "Web application";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  /** Stable identifier; also builds the heading id. */
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Where the work came from: the competition, course, or team. */
  context: string;
  year: number;
  summary: string;
  /** Tristan's part, for team projects. */
  role?: string;
  highlights: readonly string[];
  /** The limit a reader should know before trusting the result. */
  caveat?: string;
  tech: readonly string[];
  repos: readonly ProjectLink[];
  /** Live deployment. None of the projects is hosted yet. */
  demoUrl?: string;
  /** Leads the section at full width. One project at most. */
  featured?: boolean;
};

const github = "https://github.com/MFDOOMs";

/** In the order they appear on the page. */
export const projects: readonly Project[] = [
  {
    slug: "karhutlaguard",
    title: "KarhutlaGuard",
    category: "Machine learning",
    context: "Gemastik 2026 competition",
    year: 2026,
    summary:
      "Next-day fire-escalation risk for forest and peatland in Sumatra and Kalimantan, ranked so a field team knows which 100 of 14,838 grid cells to check tomorrow. Built on seven years of NASA FIRMS satellite hotspots and Copernicus ERA5-Land weather: 38.9 million cell-days.",
    highlights: [
      "Checking the top 100 cells a day catches 36% of escalation events in the held-out 2025 test year.",
      "Measured against honest baselines: average precision 0.174, against 0.147 for logistic regression and 0.112 for ranking cells by last week’s hotspots.",
      "Audited the earlier pipeline and fixed four defects, including duplicated month-end rows and a published PR-AUC of 0.467 that recomputes to 0.034.",
      "Reproducible end to end: 32 tests, CI that runs the whole pipeline on a committed sample, and byte-identical models between runs.",
    ],
    caveat:
      "It ranks fire that is already burning. On cells with no recent hotspots it catches 8.7% of events, and 29% of escalations start there, so it is not an ignition predictor.",
    tech: [
      "Python",
      "LightGBM",
      "DuckDB",
      "Streamlit",
      "pytest",
      "GitHub Actions",
    ],
    repos: [{ label: "GitHub", href: `${github}/KarhutlaGemastik2026` }],
    featured: true,
  },
  {
    slug: "learning-style-report",
    title: "AI-Based Learning Style Report",
    category: "Web application",
    context: "Artificial Intelligence course, team of three",
    year: 2026,
    summary:
      "A web questionnaire that predicts whether a student learns best by seeing, listening, or doing (the VAK model), then hands back a learning profile they can download as a PDF.",
    role: "I built the frontend in HTML, CSS and JavaScript: the questionnaire, the VAK score calculation, and the results page.",
    highlights: [
      "Fifteen Likert-scale statements, rendered and scored per dimension in the browser before anything reaches the API.",
      "Results show the predicted style, the model’s confidence in each class, study recommendations, and the PDF download.",
      "A validation layer answers “Inconclusive” instead of forcing a label when answers are straight-lined or too uniform to trust.",
      "Built twice: a FastAPI service with a Random Forest model, and a Laravel prototype of the same flow.",
    ],
    tech: ["JavaScript", "HTML & CSS", "FastAPI", "scikit-learn", "Laravel"],
    repos: [
      { label: "FastAPI version", href: `${github}/Tugas-UAS-AI-kelompok-API` },
      { label: "Laravel prototype", href: `${github}/Tugas-UAS-AI-kelompok` },
    ],
  },
  {
    slug: "dominant-color-picker",
    title: "Dominant Color Picker",
    category: "Machine learning",
    context: "Artificial Intelligence course, solo",
    year: 2026,
    summary:
      "A Streamlit app that pulls the five most dominant colors out of any JPG or PNG, so a designer or student can lift a usable palette from a reference image.",
    highlights: [
      "K-Means over every pixel as an RGB point; each cluster center becomes a palette color, with a fixed seed so results repeat.",
      "Inputs are downscaled to at most 420×420 pixels to keep clustering fast.",
      "Each color comes with its HEX code, RGB value and share of the image, plus copy-to-clipboard and palette export.",
    ],
    tech: ["Python", "Streamlit", "scikit-learn", "NumPy", "Pillow"],
    repos: [{ label: "GitHub", href: `${github}/dominant-color-picker` }],
  },
];
