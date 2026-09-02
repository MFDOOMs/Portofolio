/**
 * About-section content, taken from Tristan's CV and his own description of
 * his work. Kept as data so the section component stays presentational, and
 * so every factual claim on the page has one place to be corrected.
 */
export const about = {
  /** Opening prose. The second paragraph is his own summary, lightly edited. */
  paragraphs: [
    "I’m a third-year Informatics Engineering student at Universitas Padjadjaran, concentrating in computer networks with artificial intelligence as my minor. Most of my hands-on work sits in machine learning and software development.",
    "I build small tools end to end, and I lead student teams that ship real programs on a deadline. I want to turn that into building products people actually use.",
  ],

  /** Reference details, in the order they are most often looked for. */
  facts: [
    { label: "Program", value: "Bachelor of Informatics Engineering" },
    { label: "University", value: "Universitas Padjadjaran, Jatinangor" },
    { label: "Stage", value: "Third year, fifth semester" },
    { label: "Expected", value: "2028" },
    { label: "Concentration", value: "Computer networks" },
    { label: "Minor", value: "Artificial intelligence" },
    { label: "Based in", value: "Sumedang, West Java, Indonesia" },
    {
      label: "Languages",
      value: "Indonesian (native), English (professional working)",
    },
  ],
} as const;
