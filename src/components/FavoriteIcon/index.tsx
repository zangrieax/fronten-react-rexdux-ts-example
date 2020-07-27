import React, { useEffect, useState } from "react";
import "./index.css";
import { ReactComponent as IconFavoritesActive } from "../../assets/icons/icon-favorites-active.svg";
import { ReactComponent as IconFavoritesNoActive } from "../../assets/icons/icon-favorites-noactive.svg";

type Props = {
  onClick: (id: number) => void,
  isFavorite: boolean,
  id: number,
  className?: string
}

const FavoriteIcon: React.FC<Props> = ({ onClick, isFavorite, id, className = '' }) => {
  const [favorite, setFavorite] = useState<boolean>(isFavorite);
  const divOnClick = () => {
    onClick(id);
    setFavorite(!favorite);
  };

  useEffect(() => {
    setFavorite(isFavorite);
  }, [isFavorite]);

  return (
    <button className={`${className} game-item-favorite-icon`} onClick={divOnClick}>
      {favorite ? <IconFavoritesActive /> : <IconFavoritesNoActive />}
    </button>
  );
};

export default FavoriteIcon;
