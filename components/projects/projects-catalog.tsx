"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/motion/reveal";
import CatalogFilters from "@/components/motion/catalog-filters";
import ProjectCard from "./project-card";
import { filters, projects } from "./data";
export default function ProjectsCatalog() {
  const [activeFilter, setActiveFilter] = useState("All");
  const reducedMotion = useReducedMotion();
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((item) => item.type === activeFilter);
  return (
    <>
      <Reveal className="mt-16 border-t border-black/5 pt-8 dark:border-white/10">
        <CatalogFilters
          filters={filters}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
          label="Filter projects"
        />
      </Reveal>
      <p role="status" className="sr-only">
        {filtered.length} projects shown
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((item, index) => (
          <motion.div
            key={item.href}
            layout={!reducedMotion}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
          >
            <Reveal className="h-full" delay={Math.min(index, 3) * 0.06}>
              <ProjectCard project={item} index={index} />
            </Reveal>
          </motion.div>
        ))}
      </div>
      {filtered.length === 0 && (
        <Reveal className="mt-16 text-center">
          <p className="text-sm text-neutral-500">
            No projects in this category yet.
          </p>
        </Reveal>
      )}
    </>
  );
}
