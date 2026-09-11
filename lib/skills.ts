/**
 * Skills-section content. Every entry comes from one of two sources, noted
 * inline so each claim can be traced and corrected:
 *
 * - CV: the skills block of Tristan's CV.
 * - GitHub: used in one of his public repositories on github.com/MFDOOMs.
 *   Listed only where the repository shows him doing that part of the work;
 *   a team project whose README assigns it to someone else does not count.
 *
 * Nothing carries a proficiency level; see the Skills component for why.
 */
export type SkillGroup = {
  title: string;
  items: readonly string[];
};

export const skills = {
  languages: {
    title: "Languages",
    items: [
      "Python", // CV
      "C++", // CV
      "Java", // CV
      "JavaScript", // CV
      "TypeScript", // CV
      "SQL", // CV
      "HTML & CSS", // GitHub: Tugas-UAS-AI-kelompok-API, his frontend role
    ],
  },
  machineLearning: {
    title: "Machine learning & data",
    items: [
      "PyTorch", // CV
      "scikit-learn", // CV
      "LightGBM", // GitHub: KarhutlaGemastik2026
      "Pandas", // CV
      "NumPy", // CV
      "DuckDB", // GitHub: KarhutlaGemastik2026
    ],
  },
  tools: {
    title: "Tools & platforms",
    items: [
      "Git", // CV
      "GitHub", // CV
      "GitHub Actions", // GitHub: KarhutlaGemastik2026 CI
      "Docker", // CV
      "Streamlit", // CV
      "MySQL", // CV
      "pytest", // GitHub: KarhutlaGemastik2026 test suite
    ],
  },
  foundations: {
    title: "Foundations",
    items: [
      "Object-Oriented Programming", // CV
      "Computer Networking", // CV
      "Relational Database Design", // CV
      "Machine Learning Fundamentals", // CV
    ],
  },
} as const satisfies Record<string, SkillGroup>;
