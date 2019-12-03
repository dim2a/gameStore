import { combineReducers } from 'redux';
import games from './gamesReducer';
import gamesPage from './gamesPageReducer';
import gamePage from './gamePageReducer';
import cart from './cartReducer';

export const rootReducer = combineReducers({
  games,
  gamesPage,
  gamePage,
  cart,
});
