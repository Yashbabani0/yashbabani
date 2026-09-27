import ContentCard from "@/components/catalog/content-card";
import type { Project } from "./data";
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <ContentCard
      href={project.href}
      image={project.image}
      title={project.title}
      category={project.type}
      description={project.description}
      index={index}
      tags={project.stack}
    ></ContentCard>
  );
}
