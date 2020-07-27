export const SELECT_MENU_CATEGORY_ID = "SELECT_MENU_CATEGORY_ID" ;
export const SERVER_DATA_LOAD = "SERVER_DATA_LOAD" ;
export const FAVORITE_GAME_ID_ADD_OR_DELETE = "FAVORITE_GAME_ID_ADD_OR_DELETE";
export const LOADING_SET = "LOADING_SET";

type ServerDataLoad = {
    type: typeof SERVER_DATA_LOAD,
    games: Array<object>,
    categories: Array<object>
}

type SelectMenuCategoryId = {
    type: typeof SELECT_MENU_CATEGORY_ID,
    id: number
}
type FavoriteGameIdAddOrDelete = {
    type: typeof FAVORITE_GAME_ID_ADD_OR_DELETE,
    id: number
}

type LoadingSet = {
    type: typeof LOADING_SET,
    is: boolean
}

export type ActionTypes = ServerDataLoad | SelectMenuCategoryId | FavoriteGameIdAddOrDelete| LoadingSet;