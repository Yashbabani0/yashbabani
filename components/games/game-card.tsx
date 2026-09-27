import ContentCard from "@/components/catalog/content-card";
import type { Game } from "./data";
export default function GameCard({
  game,
  index,
}: {
  game: Game;
  index: number;
}) {
  return (
    <ContentCard
      href={game.href}
      image={game.image}
      title={game.title}
      category={game.genre}
      description={game.description}
      index={index}
      status={game.status}
      tags={[game.engine, game.genre]}
    ></ContentCard>
  );
}
