"use client";
import FilterableCatalog from "@/components/catalog/filterable-catalog";
import GameCard from "./game-card";
import { filters, games } from "./data";
export default function GamesCatalog() {
  return (
    <FilterableCatalog
      items={games}
      filters={filters}
      label="Filter games"
      itemName="games"
      getCategory={(item) => item.genre}
      renderCard={(item, index) => <GameCard game={item} index={index} />}
    />
  );
}
