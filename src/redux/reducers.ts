import { combineReducers } from "redux";
import gamesReducer from "./modules/games";

const rootReducer = combineReducers({
    gamesReducer,
});

export default rootReducer;

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
