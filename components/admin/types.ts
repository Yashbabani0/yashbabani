export const contentTypes = ["Blog", "Project", "Game", "Asset"] as const;
export type ContentType = (typeof contentTypes)[number];
export const sections = [
  "Overview",
  "Analytics",
  "Content",
  "Blogs",
  "Projects",
  "Games",
  "Assets",
  "Settings",
] as const;
export type Section = (typeof sections)[number];
export type AdminRecord = {
  id: string;
  title: string;
  type: ContentType;
  description: string;
  category: string;
  status: "Draft" | "Published";
  views: number;
  downloads: number;
  size: string;
  updated: string;
};
export type AdminSettings = {
  siteName: string;
  description: string;
  email: string;
};
