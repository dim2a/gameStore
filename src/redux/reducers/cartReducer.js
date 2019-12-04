import * as R from 'ramda';
import { ADD_GAME_TO_CART } from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_GAME_TO_CART:
      if (state.includes(payload)) {
        return state;
      } else {
        return R.append(payload, state);
      }
    default:
      return state;
  }
};
