import React from "react";
import GamesMenuItem from "../GamesMenuItem";
import "./index.css";

type Props = {
  categoriesGames: Array<{
    id: number,
    nameKey: string,
    games: Array<object>
  }>,
  currentSelectedMenuId: number,
  onCategory: (id: number) => void
}

const GameMenu: React.FC<Props> = ({ categoriesGames, currentSelectedMenuId, onCategory }) => {
  return (
    <div className="game-menu">
      {categoriesGames.map(({ id, nameKey, games }) => (
        <GamesMenuItem
          id={id}
          key={id}
          nameKey={nameKey}
          currentSelectedMenuId={currentSelectedMenuId}
          count={games.length}
          onCategory={onCategory}
        />
      ))}
    </div>
  );
};

export default GameMenu;
