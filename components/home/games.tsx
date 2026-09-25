import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const showGames = true;

const games = [
  {
    title: "Game One",
    description:
      "A temporary game description used to preview the layout until the real project is ready.",
    genre: "Simulation",
    href: "/games/game-one",
    image: "/placeholder.webp",
  },
  {
    title: "Game Two",
    description:
      "Another placeholder game card for testing the visual layout and spacing.",
    genre: "Management",
    href: "/games/game-two",
    image: "/placeholder.webp",
  },
];

export default function Games() {
  return (
    <section
      id="games"
      className="border-t border-black/5 py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Game Development
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-white">
              {showGames ? "Games I’m building." : "Learning to build games."}
            </h2>
          </div>

          {showGames && (
            <Link
              href="/games"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              View all games
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          )}
        </div>

        {showGames ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {games.map((game) => (
              <Link
                key={game.title}
                href={game.href}
                className="group overflow-hidden rounded-2xl border border-black/10 dark:border-white/10"
              >
                <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={game.image}
                    alt={`${game.title} preview`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                        {game.genre}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-black dark:text-white">
                        {game.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-neutral-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black dark:group-hover:text-white"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {game.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                I&apos;ve recently started learning game development with Godot
                and Blender, with the goal of building and publishing indie
                games and game assets.
              </p>

              <p className="mt-4 leading-7 text-neutral-500">
                I&apos;m especially interested in simulation and management
                games, including city building, transport, shop, and business
                simulation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
              {["Godot", "Blender", "Simulation", "Management", "Indie"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 px-3 py-1.5 text-sm text-neutral-500 dark:border-white/10"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
