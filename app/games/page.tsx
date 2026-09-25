import GamesHeader from "@/components/games/games-header";
import GamesCatalog from "@/components/games/games-catalog";
import GamesLearning from "@/components/games/games-learning";
import { showGames } from "@/components/games/data";
export default function GamesPage() {
  return (
    <main>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <GamesHeader />
          {showGames ? <GamesCatalog /> : <GamesLearning />}
        </div>
      </section>
    </main>
  );
}
