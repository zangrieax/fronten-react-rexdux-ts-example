import React from "react";
import GameItem from "../GameItem";
import { TransitionGroup, CSSTransition  } from 'react-transition-group';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { favoriteGameIdAddOrDelete } from "../../redux/modules/games/actions";
import { getGamesMenuAndFavoriteMemo } from "../../redux/modules/games/selectors";
import "./index.css";
import { AppStateType } from '../../redux/reducers';
import Preloader from "../Preloader";


const stateSelector = (state: AppStateType) => ({
  games: getGamesMenuAndFavoriteMemo(state),
  isLoading: state.gamesReducer.isLoading
});

const GamesList = () => {
  const { games, isLoading } = useSelector(stateSelector, shallowEqual);
  const dispatch = useDispatch();
  const onFavorite = (id: number): void => dispatch(favoriteGameIdAddOrDelete(id));

  return (
      <>
        <TransitionGroup className="game-list">
          {isLoading ? [] :
              games.map(item => (
                  <CSSTransition
                      key={item.id}
                      timeout={300}
                      classNames="item"
                  >
                    <GameItem {...item} onFavorite={onFavorite} />
                  </CSSTransition>
              ))
          }
          </TransitionGroup>
          {isLoading && <Preloader className="preloader-orientation" />}
        </>
  )
};

export default GamesList;


