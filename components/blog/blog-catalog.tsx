"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/motion/reveal";
import CatalogFilters from "@/components/motion/catalog-filters";
import PostCard from "./post-card";
import { filters, posts } from "./data";
export default function BlogCatalog() {
  const [activeFilter, setActiveFilter] = useState("All");
  const reducedMotion = useReducedMotion();
  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) => post.category === activeFilter);
  return (
    <>
      <Reveal className="mt-16 border-t border-black/5 pt-8 dark:border-white/10">
        <CatalogFilters
          filters={filters}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
          label="Filter blog posts"
        />
      </Reveal>
      <p role="status" className="sr-only">
        {filteredPosts.length} posts shown
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.href}
            layout={!reducedMotion}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
          >
            <Reveal className="h-full" delay={Math.min(index, 3) * 0.06}>
              <PostCard post={post} />
            </Reveal>
          </motion.div>
        ))}
      </div>
      {filteredPosts.length === 0 && (
        <Reveal className="mt-16 text-center">
          <p className="text-sm text-neutral-500">
            No posts in this category yet.
          </p>
        </Reveal>
      )}
    </>
  );
}
