export const filters = [
  "All",
  "Web Development",
  "Game Development",
  "Devlog",
  "Projects",
];

export const posts = [
  {
    title: "Building a Modern SaaS from Scratch",
    excerpt:
      "A temporary article about architecture, product decisions, and the process of building a SaaS application.",
    category: "Web Development",
    date: "Sep 2026",
    readTime: "6 min read",
    href: "/blog/building-modern-saas",
    image: "/placeholder.webp",
  },
  {
    title: "Starting Game Development with Godot",
    excerpt:
      "A placeholder post about learning Godot, understanding game development fundamentals, and building the first prototype.",
    category: "Game Development",
    date: "Sep 2026",
    readTime: "4 min read",
    href: "/blog/starting-godot",
    image: "/placeholder.webp",
  },
  {
    title: "Learning Blender for Game Assets",
    excerpt:
      "Notes and experiments from learning Blender with a focus on creating assets for indie games.",
    category: "Devlog",
    date: "Sep 2026",
    readTime: "5 min read",
    href: "/blog/learning-blender",
    image: "/placeholder.webp",
  },
  {
    title: "Designing Better Developer Tools",
    excerpt:
      "A temporary article covering ideas around developer experience, reusable tooling, and keeping APIs simple.",
    category: "Projects",
    date: "Aug 2026",
    readTime: "7 min read",
    href: "/blog/developer-tools",
    image: "/placeholder.webp",
  },
];

export type BlogPost = (typeof posts)[number];
