import * as R from 'ramda';
import { FETCH_GAMES_SUCCESS } from '../actions/actionTypes';

const initialState = {
  ids: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GAMES_SUCCESS:
      return R.merge(state, { ids: R.pluck('id', payload) });
    default:
      return state;
  }
};
