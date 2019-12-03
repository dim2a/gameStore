import {
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
  FETCH_GAME_BY_ID_START,
  FETCH_GAME_BY_ID_SUCCESS,
  FETCH_GAME_BY_ID_FAILURE,
  ADD_GAME_TO_CART,
} from './actionTypes';
import { fetchGames as fetchGamesApi } from '../../api/index';
import { fetchGameById as fetchGameByIdApi } from '../../api/index';

export const fetchGames = () => async dispatch => {
  dispatch({ type: FETCH_GAMES_START });

  try {
    const games = await fetchGamesApi();
    dispatch({
      type: FETCH_GAMES_SUCCESS,
      payload: games,
    });
  } catch (err) {
    dispatch({
      type: FETCH_GAMES_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const fetchGameById = id => async dispatch => {
  dispatch({ type: FETCH_GAME_BY_ID_START });

  try {
    const game = await fetchGameByIdApi(id);
    dispatch({
      type: FETCH_GAME_BY_ID_SUCCESS,
      payload: game,
    });
  } catch (err) {
    dispatch({
      type: FETCH_GAME_BY_ID_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const addGameToCart = gameId => dispatch => {
  dispatch({
    type: ADD_GAME_TO_CART,
    payload: gameId,
  });
};
