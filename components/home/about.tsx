import Reveal from "@/components/motion/reveal";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Drizzle ORM",
  "Tailwind CSS",
  "Bun",
  "Turborepo",
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-black/5 py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              About
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-white">
              Building for the web, learning to build games.
            </h2>
          </Reveal>

          <Reveal className="max-w-2xl" delay={0.1}>
            <div className="space-y-5 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              <p>
                I&apos;m a self-taught full-stack developer from Rajkot, India,
                focused on building SaaS products, developer tools, and modern
                web applications.
              </p>

              <p>
                Most of my work revolves around TypeScript and the modern web
                ecosystem, from frontend interfaces to backend APIs,
                authentication, databases, and product infrastructure.
              </p>

              <p>
                I&apos;ve recently started learning game development with Godot
                and Blender, with the goal of building and publishing indie
                games and game assets. I&apos;m particularly interested in
                simulation and management games, including city-building,
                transport, shop, and business simulation experiences.
              </p>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-sm font-medium text-black dark:text-white">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-black/10 px-3 py-1.5 text-sm text-neutral-600 transition duration-200 motion-safe:hover:-translate-y-1 hover:border-black/25 hover:bg-neutral-100 dark:border-white/10 dark:text-neutral-400 dark:hover:border-white/25 dark:hover:bg-neutral-900"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 border-t border-black/5 pt-8 sm:grid-cols-3 dark:border-white/10">
              <div>
                <p className="text-sm text-neutral-500">Location</p>
                <p className="mt-1 font-medium text-black dark:text-white">
                  Rajkot, India
                </p>
              </div>

              <div>
                <p className="text-sm text-neutral-500">Web</p>
                <p className="mt-1 font-medium text-black dark:text-white">
                  Full-stack development
                </p>
              </div>

              <div>
                <p className="text-sm text-neutral-500">Game Dev</p>
                <p className="mt-1 font-medium text-black dark:text-white">
                  Godot & Blender
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
