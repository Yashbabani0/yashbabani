import { projects } from "@/components/projects/data";
import { games } from "@/components/games/data";
import { posts } from "@/components/blog/data";
import { assets } from "./demo-data";
import type { AdminRecord } from "./types";

export const initialRecords: AdminRecord[] = [
  ...posts.map((item, i) => ({
    id: `blog-${i}`,
    title: item.title,
    type: "Blog" as const,
    description: item.excerpt,
    category: item.category,
  })),
  ...projects.map((item, i) => ({
    id: `project-${i}`,
    title: item.title,
    type: "Project" as const,
    description: item.description,
    category: item.type,
  })),
  ...games.map((item, i) => ({
    id: `game-${i}`,
    title: item.title,
    type: "Game" as const,
    description: item.description,
    category: item.genre,
  })),
  ...assets.map((item, i) => ({
    id: `asset-${i}`,
    title: item.name,
    type: "Asset" as const,
    description: `A downloadable ${item.category.toLowerCase()} pack.`,
    category: item.category,
    downloads: item.downloads,
    size: item.size,
  })),
].map((item, i) => ({
  status: i % 4 === 2 ? "Draft" : "Published",
  views: 2481 - i * 97,
  downloads: 0,
  size: "—",
  updated: "Sep 26, 2026",
  ...item,
}));
