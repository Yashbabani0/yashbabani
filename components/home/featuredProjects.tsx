import Image from "next/image";
import Link from "@/components/motion/animated-link";
import Reveal from "@/components/motion/reveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description:
      "A short description for this project will go here. Replace this with the real project details later.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "/projects/project-one",
    image: "/placeholder.webp",
  },
  {
    title: "Project Two",
    description:
      "Another temporary project description used to preview the layout and overall visual style.",
    stack: ["React", "Node.js", "Tailwind CSS"],
    href: "/projects/project-two",
    image: "/placeholder.webp",
  },
  {
    title: "Project Three",
    description:
      "A placeholder project card for now. You can swap in real screenshots and project information later.",
    stack: ["TypeScript", "NestJS", "Drizzle"],
    href: "/projects/project-three",
    image: "/placeholder.webp",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="border-t border-black/5 py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Selected Work
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-white">
              Things I&apos;m building.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-neutral-600 dark:text-neutral-400">
              A selection of projects, experiments, and products I&apos;ve
              worked on.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
          >
            View all projects
            <ArrowUpRight
              size={16}
              className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
            />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <Link
                href={project.href}
                className="group block h-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 font-mono text-xs text-neutral-600 backdrop-blur dark:bg-black/80 dark:text-neutral-300">
                    0{index + 1}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-neutral-400 transition-all motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 group-hover:text-black dark:group-hover:text-white"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-neutral-500 dark:border-white/10"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
