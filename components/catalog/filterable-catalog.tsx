"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/motion/reveal";
import CatalogFilters from "@/components/motion/catalog-filters";

type FilterableCatalogProps<T extends { href: string }> = {
  items: readonly T[];
  filters: string[];
  label: string;
  itemName: string;
  getCategory: (item: T) => string;
  renderCard: (item: T, index: number) => ReactNode;
};

export default function FilterableCatalog<T extends { href: string }>({
  items,
  filters,
  label,
  itemName,
  getCategory,
  renderCard,
}: FilterableCatalogProps<T>) {
  const [activeFilter, setActiveFilter] = useState("All");
  const reducedMotion = useReducedMotion();
  const filtered =
    activeFilter === "All"
      ? items
      : items.filter((item) => getCategory(item) === activeFilter);

  return (
    <>
      <Reveal className="mt-16 border-t border-black/5 pt-8 dark:border-white/10">
        <CatalogFilters
          filters={filters}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
          label={label}
        />
      </Reveal>
      <p role="status" className="sr-only">
        {filtered.length} {itemName} shown
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((item, index) => (
          <motion.div
            key={item.href}
            layout={!reducedMotion}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
          >
            <Reveal className="h-full" delay={Math.min(index, 3) * 0.06}>
              {renderCard(item, index)}
            </Reveal>
          </motion.div>
        ))}
      </div>
      {filtered.length === 0 && (
        <Reveal className="mt-16 text-center">
          <p className="text-sm text-neutral-500">
            No {itemName} in this category yet.
          </p>
        </Reveal>
      )}
    </>
  );
}
