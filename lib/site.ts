/**
 * Single source of truth for site-wide identity values.
 * Keep factual data here so UI components stay presentational.
 */
export const site = {
  name: "Tristan Bonardo Silalahi",
  title: "Tristan Bonardo Silalahi — Portfolio",
  description: "Personal portfolio of Tristan Bonardo Silalahi.",
  githubUsername: "MFDOOMs",
  githubUrl: "https://github.com/MFDOOMs",
  githubReposUrl: "https://github.com/MFDOOMs?tab=repositories",
  /** Public by Tristan's choice; the phone number on his CV is not. */
  email: "tristansilalahi09@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/tristan-silalahi-785669270/",
  location: "Sumedang, West Java, Indonesia",
} as const;
