"use client";
import FilterableCatalog from "@/components/catalog/filterable-catalog";
import ProjectCard from "./project-card";
import { filters, projects } from "./data";
export default function ProjectsCatalog() {
  return (
    <FilterableCatalog
      items={projects}
      filters={filters}
      label="Filter projects"
      itemName="projects"
      getCategory={(item) => item.type}
      renderCard={(item, index) => <ProjectCard project={item} index={index} />}
    />
  );
}
