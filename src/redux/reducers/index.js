import { combineReducers } from 'redux';
import games from './gamesReducer';
import gamesPage from './gamesPageReducer';

export const rootReducer = combineReducers({
  games,
  gamesPage,
});
