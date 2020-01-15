import {
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
  FETCH_GAME_BY_ID_START,
  FETCH_GAME_BY_ID_SUCCESS,
  FETCH_GAME_BY_ID_FAILURE,
  ADD_GAME_TO_CART,
  SEARCH_GAME,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  DELETE_GAME_FROM_CART,
  BUY_ALL_START,
  BUY_ALL_SUCCESS,
  BUY_ALL_FAILURE,
  TOGGLE_IS_FETCHING,
} from './actionTypes';
import {
  fetchGames as fetchGamesApi,
  fetchGameById as fetchGameByIdApi,
  fetchCategories as fetchCategoriesApi,
  pachGames as pachGamesApi,
} from '../../api/index';

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

export const toggleIsFetching = isFetching => dispatch => {
  dispatch({
    type: TOGGLE_IS_FETCHING,
    payload: isFetching,
  });
};

export const fetchGameById = id => async dispatch => {
  dispatch({ type: FETCH_GAME_BY_ID_START });

  try {
    const game = await fetchGameByIdApi(id);
    dispatch({
      type: FETCH_GAME_BY_ID_SUCCESS,
      payload: {
        game,
        isFetching: false,
      },
    });
    //toggleIsFetching(false);
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

export const searchGame = title => dispatch => {
  dispatch({
    type: SEARCH_GAME,
    payload: title,
  });
};

export const fetchCategories = () => async dispatch => {
  dispatch({ type: FETCH_CATEGORIES_START });

  try {
    const categories = await fetchCategoriesApi();
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories,
    });
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const deleteFromCart = id => dispatch => {
  dispatch({
    type: DELETE_GAME_FROM_CART,
    payload: id,
  });
};

export const buyAll = (cart, games) => async dispatch => {
  dispatch({ type: BUY_ALL_START });

  try {
    await pachGamesApi(games);
    dispatch({
      type: BUY_ALL_SUCCESS,
      payload: cart,
    });
  } catch (err) {
    dispatch({
      type: BUY_ALL_FAILURE,
      payload: err,
      error: true,
    });
  }
};
