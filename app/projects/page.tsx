import ProjectsHeader from "@/components/projects/projects-header";
import ProjectsCatalog from "@/components/projects/projects-catalog";

export default function ProjectsPage() {
  return (
    <main>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ProjectsHeader />
          <ProjectsCatalog />
        </div>
      </section>
    </main>
  );
}
