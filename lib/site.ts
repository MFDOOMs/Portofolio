/**
 * Single source of truth for site-wide identity values.
 * Keep factual data here so UI components stay presentational.
 */
export const site = {
  name: "Tristan Bonardo Silalahi",
  /** Under 60 characters, so search results show it whole. */
  title: "Tristan Bonardo Silalahi — Informatics Engineering Student",
  /** Under 160 characters, the length search results display. */
  description:
    "Portfolio of Tristan Bonardo Silalahi, an Informatics Engineering student at Universitas Padjadjaran working in machine learning and software development.",
  githubUsername: "MFDOOMs",
  githubUrl: "https://github.com/MFDOOMs",
  /** Public by Tristan's choice; the phone number on his CV is not. */
  email: "tristansilalahi09@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/tristan-silalahi-785669270/",
  location: "Sumedang, West Java, Indonesia",
} as const;
