import { SERVER_DATA_LOAD, FAVORITE_GAME_ID_ADD_OR_DELETE, SELECT_MENU_CATEGORY_ID, LOADING_SET, ActionTypes } from "./types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../../reducers";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const serverDataLoad = (): ThunkType => async (dispatch) => {
  const controller = new AbortController();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signal = controller.signal;
  //Ждем пять секунд и закрываем соединение
  setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch("/gamesList.json", {signal: controller.signal});
    if (response.status === 200) {
      const jsonResponse = await response.json();
      dispatch({
        type: SERVER_DATA_LOAD,
        games: jsonResponse.games as Array<object>,
        categories: jsonResponse.categories as Array<object>,
      });
      dispatch({
        type: LOADING_SET,
        is: false,
      });
      return;
    }
    console.warn(response.status, response.statusText);
  }catch (err) {
    if (err.name === "AbortError"){
      console.warn("Соединение прервано, проверте настройки интернета");
      return;
    }
    console.warn(err);
  }
};

export const selectMenuCategoryId = (id: number): ThunkType => async (dispatch) => {
  dispatch({
    type: LOADING_SET,
    is: true,
  });
  dispatch({
    type: SELECT_MENU_CATEGORY_ID,
    id,
  });
  //Симулируем задержку с сервера
  await new Promise(resolve => setTimeout(resolve, 1000));
  dispatch({
    type: LOADING_SET,
    is: false,
  });
};

export const favoriteGameIdAddOrDelete = (id: number): ThunkType => async (dispatch) => {
  dispatch({
    type: FAVORITE_GAME_ID_ADD_OR_DELETE,
    id,
  });
};
