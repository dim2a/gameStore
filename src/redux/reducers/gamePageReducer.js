import {
  FETCH_GAME_BY_ID_SUCCESS,
  TOGGLE_IS_FETCHING,
} from '../actions/actionTypes';
import * as R from 'ramda';

const initialState = {
  id: null,
  isFetching: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GAME_BY_ID_SUCCESS:
      return R.merge(state, {
        id: R.prop('id', payload.game),
        isFetching: payload.isFetching,
      });
    case TOGGLE_IS_FETCHING:
      return R.merge(state, {
        isFetching: payload,
      });
    default:
      return state;
  }
};
