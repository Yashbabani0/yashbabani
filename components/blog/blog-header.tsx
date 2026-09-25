import Reveal from "@/components/motion/reveal";
export default function BlogHeader() {
  return (
    <Reveal className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
        Blog
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl dark:text-white">
        Notes from things I&apos;m building and learning.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg dark:text-neutral-400">
        Writing about web development, products, developer tooling, game
        development, and the things I learn along the way.
      </p>
    </Reveal>
  );
}
