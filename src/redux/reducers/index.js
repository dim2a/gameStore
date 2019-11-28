import { combineReducers } from 'redux';
import games from './gamesReducer';
import gamesPage from './gamesPageReducer';
import gamePage from './gamePageReducer';

export const rootReducer = combineReducers({
  games,
  gamesPage,
  gamePage,
});
