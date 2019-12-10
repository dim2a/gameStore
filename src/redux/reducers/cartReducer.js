import * as R from 'ramda';
import {
  ADD_GAME_TO_CART,
  DELETE_GAME_FROM_CART,
} from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_GAME_TO_CART:
      if (state.includes(payload)) {
        return state;
      } else {
        return R.append(payload, state);
      }
    case DELETE_GAME_FROM_CART:
      return R.without([payload], state);
    default:
      return state;
  }
};
