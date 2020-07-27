import { joinLeft } from "../../../utils/array";
import { createSelector } from "reselect";
import { AppStateType } from '../../reducers';

export const getGamesMenuAndFavorite = (state: AppStateType): Array<object> => {
  const {
    gamesReducer: { games, categories, currentSelectedMenuId },
  } = state;

  //Получим избранные игры
  const gamesFavoriteFind = categories.find(({ id }) => id === 1) || { games: [] as Array<object>};
  const gamesFavorite: Array<object> = gamesFavoriteFind.games.map(({ id }) => id);


  const gamesMenuFind = categories
    //Найдем игры по id меню
    .find(({ id }) => id === currentSelectedMenuId) || { games: [] as Array<object>};
    //Отсортируем, чтобы поместить наверх большие игры
  const gamesMenu: Array<object> =  gamesMenuFind.games.sort((a, b) => Number(b.top) - Number(a.top))
    //Добавим избранные
    .map(({ id, top }) => ({
      id,
      size: top ? "large" : "small",
      isFavorite: gamesFavorite.includes(id),
    }));

  //Сделаем Join игр по id с играми в меню
  return joinLeft(gamesMenu, games, "id");
};

export const getGamesMenuAndFavoriteMemo = createSelector(
  getGamesMenuAndFavorite,
  (games) => games
);
