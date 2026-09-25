export const showGames = true;

export const filters = [
  "All",
  "Simulation",
  "Management",
  "City Builder",
  "Transport",
  "Business",
];

export const games = [
  {
    title: "Game One",
    description:
      "A temporary game description used to preview the game page layout until the real project is ready.",
    genre: "Simulation",
    status: "In development",
    engine: "Godot",
    href: "/games/game-one",
    image: "/placeholder.webp",
  },
  {
    title: "Game Two",
    description:
      "A placeholder management game entry for testing cards, filtering, and responsive layout.",
    genre: "Management",
    status: "Prototype",
    engine: "Godot",
    href: "/games/game-two",
    image: "/placeholder.webp",
  },
  {
    title: "Game Three",
    description:
      "Another temporary game project that can later be replaced with a real indie game.",
    genre: "City Builder",
    status: "Concept",
    engine: "Godot",
    href: "/games/game-three",
    image: "/placeholder.webp",
  },
  {
    title: "Game Four",
    description:
      "A placeholder transport simulation project for testing the complete games layout.",
    genre: "Transport",
    status: "Prototype",
    engine: "Godot",
    href: "/games/game-four",
    image: "/placeholder.webp",
  },
];

export type Game = (typeof games)[number];
