import * as R from 'ramda';

import { FETCH_GAMES_SUCCESS } from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GAMES_SUCCESS:
      const newValue = R.indexBy(R.prop('id'), payload);
      return R.merge(state, newValue);
    default:
      return state;
  }
};
