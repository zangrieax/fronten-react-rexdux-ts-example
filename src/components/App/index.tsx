import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import GamesList from "../GamesList";
import GamesMenu from "../GamesMenu";
import {
  serverDataLoad,
  selectMenuCategoryId,
} from "../../redux/modules/games/actions";
import "./index.css";
import { AppStateType } from '../../redux/reducers';

const stateSelector = (state: AppStateType) => ({ ...state });

const App = () => {
  const dispatch = useDispatch();
  const {
    gamesReducer: { categories, currentSelectedMenuId },
  } = useSelector(stateSelector, shallowEqual);

  useEffect(() => {
    dispatch(serverDataLoad());
  }, [dispatch]);
  return (
      <div className="app">
          <GamesMenu
            categoriesGames={categories}
            currentSelectedMenuId={currentSelectedMenuId}
            onCategory={(id) => dispatch(selectMenuCategoryId(id))}
          />
          <GamesList />
      </div>
  );
};

export default App;
