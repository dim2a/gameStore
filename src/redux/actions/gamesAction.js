import {
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
} from './actionTypes';
import { fetchGames as fetchGamesApi } from '../../api/index';

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
