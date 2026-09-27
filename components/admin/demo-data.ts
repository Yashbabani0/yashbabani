import { Eye, Users, Download, Activity } from "lucide-react";
export const stats = [
  {
    label: "Page Views",
    value: "12,842",
    change: "+18.4%",
    positive: true,
    icon: Eye,
  },
  {
    label: "Visitors",
    value: "5,231",
    change: "+12.7%",
    positive: true,
    icon: Users,
  },
  {
    label: "Asset Downloads",
    value: "1,284",
    change: "+31.2%",
    positive: true,
    icon: Download,
  },
  {
    label: "Avg. Session",
    value: "3m 42s",
    change: "-2.8%",
    positive: false,
    icon: Activity,
  },
];

export const traffic = [
  { month: "Apr", value: 34 },
  { month: "May", value: 52 },
  { month: "Jun", value: 44 },
  { month: "Jul", value: 68 },
  { month: "Aug", value: 61 },
  { month: "Sep", value: 88 },
];

export const content = [
  {
    title: "Building a Modern SaaS from Scratch",
    type: "Blog",
    status: "Published",
    views: "2,481",
    updated: "2h ago",
  },
  {
    title: "Project One",
    type: "Project",
    status: "Published",
    views: "1,842",
    updated: "Yesterday",
  },
  {
    title: "Transport Simulation Prototype",
    type: "Game",
    status: "Draft",
    views: "—",
    updated: "2 days ago",
  },
  {
    title: "Low Poly City Pack",
    type: "Asset",
    status: "Published",
    views: "927",
    updated: "4 days ago",
  },
];

export const assets = [
  {
    name: "Low Poly City Pack",
    category: "3D Assets",
    downloads: 482,
    size: "128 MB",
    status: "Published",
  },
  {
    name: "Shop Interior Pack",
    category: "3D Assets",
    downloads: 341,
    size: "86 MB",
    status: "Published",
  },
  {
    name: "Management UI Kit",
    category: "UI",
    downloads: 271,
    size: "14 MB",
    status: "Published",
  },
  {
    name: "Road Props Pack",
    category: "3D Assets",
    downloads: 190,
    size: "72 MB",
    status: "Draft",
  },
];

export const popularPages = [
  { page: "/", views: "4,291", percentage: 92 },
  { page: "/projects", views: "2,832", percentage: 69 },
  { page: "/games", views: "1,962", percentage: 48 },
  { page: "/blog", views: "1,411", percentage: 34 },
  { page: "/about", views: "891", percentage: 22 },
];

export const sources = [
  { source: "Direct", value: "41%" },
  { source: "Google", value: "29%" },
  { source: "GitHub", value: "14%" },
  { source: "X / Twitter", value: "9%" },
  { source: "Other", value: "7%" },
];
