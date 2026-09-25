"use client";

import { motion, useReducedMotion } from "motion/react";

export default function CatalogFilters({
  filters,
  activeFilter,
  onChange,
  label,
}: {
  filters: string[];
  activeFilter: string;
  onChange: (filter: string) => void;
  label: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          type="button"
          aria-pressed={activeFilter === filter}
          onClick={() => onChange(filter)}
          whileHover={reducedMotion ? undefined : { y: -2 }}
          whileTap={reducedMotion ? undefined : { scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`min-h-11 rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${activeFilter === filter ? "bg-black text-white dark:bg-white dark:text-black" : "border border-black/10 text-neutral-600 hover:bg-neutral-100 dark:border-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900"}`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
}
