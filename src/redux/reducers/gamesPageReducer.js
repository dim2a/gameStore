import * as R from 'ramda';
import { FETCH_GAMES_SUCCESS, SEARCH_GAME } from '../actions/actionTypes';

const initialState = {
  ids: [],
  search: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GAMES_SUCCESS:
      return R.merge(state, { ids: R.pluck('id', payload) });
    case SEARCH_GAME:
      return R.merge(state, { search: payload });
    default:
      return state;
  }
};
