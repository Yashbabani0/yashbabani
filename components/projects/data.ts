export const filters = [
  "All",
  "SaaS",
  "Web App",
  "Developer Tool",
  "Open Source",
  "Experiment",
  "Backend",
];

export const projects = [
  {
    title: "Project One",
    description:
      "A temporary project description. Replace this with the real project details when the project is ready.",
    type: "SaaS",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "/projects/project-one",
    image: "/placeholder.webp",
  },
  {
    title: "Project Two",
    description:
      "A placeholder project used to preview the project page layout and card design.",
    type: "Developer Tool",
    stack: ["TypeScript", "Node.js", "Bun"],
    href: "/projects/project-two",
    image: "/placeholder.webp",
  },
  {
    title: "Project Three",
    description:
      "Another temporary project that can later be replaced with a real product, experiment, or open-source project.",
    type: "Web App",
    stack: ["React", "Tailwind CSS", "Node.js"],
    href: "/projects/project-three",
    image: "/placeholder.webp",
  },
  {
    title: "Project Four",
    description:
      "Placeholder content for another project. Use this card for SaaS, internal tools, libraries, or experiments.",
    type: "Experiment",
    stack: ["Next.js", "Drizzle", "PostgreSQL"],
    href: "/projects/project-four",
    image: "/placeholder.webp",
  },
  {
    title: "Project Five",
    description:
      "A temporary project entry used while the actual portfolio content is still being prepared.",
    type: "Open Source",
    stack: ["TypeScript", "GitHub", "Node.js"],
    href: "/projects/project-five",
    image: "/placeholder.webp",
  },
  {
    title: "Project Six",
    description:
      "One more placeholder project for testing the complete project grid and responsive layout.",
    type: "Backend",
    stack: ["NestJS", "PostgreSQL", "Drizzle"],
    href: "/projects/project-six",
    image: "/placeholder.webp",
  },
];

export type Project = (typeof projects)[number];
