import { combineReducers } from 'redux';
import games from './gamesReducer';

export const rootReducer = combineReducers({ games });
