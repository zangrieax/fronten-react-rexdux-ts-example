import React, { useState } from "react";
import FavoriteIcon from "../FavoriteIcon";
import "./index.css";

type Props = {
    size: string,
    id: number,
    name: string,
    isFavorite: boolean,
    img: string,
    onFavorite: () => void
}

const sideEnumImgPlaceholder = {
  small: "/placeholder/small/placeholder.jpg",
  large: "/placeholder/large/placeholder.jpg",
};

const GameItem: React.FC<Props> = ({ size, id, name, isFavorite, img, onFavorite }) => {
  const [loader, setLoader] = useState<boolean>(true);
  const onError = (): void => setLoader(false);
  const src = loader ? img[size] : sideEnumImgPlaceholder[size];

  return (
     <div className={size}>
      <img className="game-item-image" src={src} alt={name} onError={onError} />
      <div className="game-item-content" >
        <FavoriteIcon className="favorite-icon-orientation" onClick={onFavorite} isFavorite={isFavorite} id={id} />
        <span className="game-item-name">{name}</span>
      </div>
    </div>
  );
};

export default GameItem;
