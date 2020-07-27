import React from "react";
import FlipNumbers from 'react-flip-numbers';
import "./index.css";

type Props = {
  id: number,
  nameKey: string,
  currentSelectedMenuId: number,
  onCategory: (id: number) => void,
  count: number,
}

const GamesMenuItem: React.FC<Props> = ({
  id,
  nameKey,
  currentSelectedMenuId,
  onCategory,
  count,
}) => {
  const gamesMenuItemAddClass: string = id === currentSelectedMenuId ? "active" : "inactive";
  const onCategoryClick = (): void => onCategory(id);

  return (
    <div onClick={onCategoryClick} className={`games-menu-item ${gamesMenuItemAddClass}`} >
      <span>{nameKey}</span>
      {id === 1 && 
        <FlipNumbers height={12} width={12} play perspective={100} numbers={String(count)} />
      }
    </div>
  );
};

export default GamesMenuItem;
