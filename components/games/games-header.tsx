import Reveal from "@/components/motion/reveal";
import { showGames } from "./data";
export default function GamesHeader() {
  return (
    <Reveal className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
        Game Development
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl dark:text-white">
        {showGames
          ? "Games, prototypes, and experiments."
          : "Learning to build games."}
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg dark:text-neutral-400">
        {showGames
          ? "A collection of indie games, prototypes, and game development experiments."
          : "I’ve recently started learning game development with Godot and Blender, with the goal of building and publishing indie games and game assets."}
      </p>
    </Reveal>
  );
}
