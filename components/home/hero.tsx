import Link from "@/components/motion/animated-link";
import Reveal from "@/components/motion/reveal";

const focusItems = [
  {
    label: "Web",
    value: "Next.js · TypeScript · Node.js",
  },
  {
    label: "Game Dev",
    value: "Godot · Blender",
  },
  {
    label: "Focus",
    value: "Simulation · Management",
  },
];

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)]">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-6 py-20">
        <div className="w-full">
          <Reveal className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Full-stack developer · Rajkot, India
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-black sm:text-6xl lg:text-7xl dark:text-white">
              Building things for the web.
              <span className="block text-neutral-400">
                Learning to build worlds next.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg dark:text-neutral-400">
              I build SaaS products, developer tools, and full-stack web
              applications. I&apos;m also exploring indie game development with
              a focus on simulation and management games.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
              >
                View Projects
              </Link>

              <Link
                href="/games"
                className="rounded-lg border border-black/10 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-100 dark:border-white/10 dark:text-white dark:hover:bg-neutral-900"
              >
                Explore Games
              </Link>
            </div>
          </Reveal>

          <div className="mt-20 grid border-y border-black/5 sm:grid-cols-3 dark:border-white/10">
            {focusItems.map((item, index) => (
              <Reveal
                key={item.label}
                delay={0.1 + index * 0.08}
                className={`py-5 sm:px-6 ${
                  index !== 0
                    ? "border-t border-black/5 sm:border-l sm:border-t-0 dark:border-white/10"
                    : ""
                }`}
              >
                <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                  {item.label}
                </p>

                <p className="mt-2 text-sm font-medium text-black dark:text-white">
                  {item.value}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
