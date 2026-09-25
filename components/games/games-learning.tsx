import Reveal from "@/components/motion/reveal";
export default function GamesLearning() {
  return (
    <Reveal className="mt-16 grid gap-10 border-t border-black/5 pt-10 lg:grid-cols-[1.25fr_0.75fr] dark:border-white/10">
      <div className="max-w-2xl">
        <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          I&apos;m currently learning the fundamentals of game development with
          Godot while using Blender for 3D assets and environment work.
        </p>

        <p className="mt-5 leading-7 text-neutral-500">
          My long-term focus is simulation and management games, especially city
          building, transport systems, shop management, and business simulation.
        </p>

        <p className="mt-5 leading-7 text-neutral-500">
          This page will eventually include playable prototypes, development
          progress, published games, and assets.
        </p>
      </div>

      <div className="lg:border-l lg:border-black/5 lg:pl-10 dark:lg:border-white/10">
        <p className="text-sm font-medium text-black dark:text-white">
          Currently exploring
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Godot",
            "Blender",
            "Simulation",
            "Management",
            "City Building",
            "Transport",
            "Business Simulation",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 px-3 py-1.5 text-sm text-neutral-500 dark:border-white/10 dark:text-neutral-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
