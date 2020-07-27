import { SERVER_DATA_LOAD, FAVORITE_GAME_ID_ADD_OR_DELETE, SELECT_MENU_CATEGORY_ID, LOADING_SET, ActionTypes } from "./types";

const defaultState = {
  games: [],
  categories: [],
  currentSelectedMenuId: 0,
  isLoading: true
};

type DefaultState = typeof defaultState;

export default (state = defaultState, action: ActionTypes): DefaultState => {
  switch (action.type) {
    case SELECT_MENU_CATEGORY_ID:
      return Object.assign({}, state, {
        currentSelectedMenuId: action.id,
      });
    case SERVER_DATA_LOAD:
      return Object.assign({}, state, {
        games: action.games,
        categories: action.categories,
      });
    case FAVORITE_GAME_ID_ADD_OR_DELETE:
      const gamesIndex = state.categories.findIndex(({ id }) => id === 1);
      if (
        state.categories[gamesIndex].games.find(({ id }) => id === action.id)
      ) {
        state.categories[gamesIndex].games = state.categories[gamesIndex].games.filter(
            ({id}) => id !== action.id
        );
      } else {
        state.categories[gamesIndex].games.push({ id: action.id, top: false });
      }
      return Object.assign({}, state, {
        categories: [...state.categories],
      });
    case LOADING_SET:
      return {...state, isLoading: action.is}
    default:
      return state;
  }
};
