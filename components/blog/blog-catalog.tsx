"use client";
import FilterableCatalog from "@/components/catalog/filterable-catalog";
import PostCard from "./post-card";
import { filters, posts } from "./data";
export default function BlogCatalog() {
  return (
    <FilterableCatalog
      items={posts}
      filters={filters}
      label="Filter blog posts"
      itemName="posts"
      getCategory={(item) => item.category}
      renderCard={(item) => <PostCard post={item} />}
    />
  );
}
