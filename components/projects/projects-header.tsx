import Reveal from "@/components/motion/reveal";
export default function ProjectsHeader() {
  return (
    <Reveal className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
        Projects
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl dark:text-white">
        Products, tools, and experiments.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg dark:text-neutral-400">
        A collection of things I&apos;ve built while exploring web development,
        SaaS products, backend systems, developer tooling, and new ideas.
      </p>
    </Reveal>
  );
}
