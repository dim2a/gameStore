import * as R from 'ramda';

import {
  FETCH_GAMES_SUCCESS,
  FETCH_GAME_BY_ID_SUCCESS,
} from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GAMES_SUCCESS:
      const newValue = R.indexBy(R.prop('id'), payload);
      return R.merge(state, newValue);
    case FETCH_GAME_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state);
    default:
      return state;
  }
};
