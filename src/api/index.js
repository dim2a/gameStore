import store from './temp';
import * as R from 'ramda';

const { games, categories } = store;

export const fetchGames = async () => {
  return new Promise(resolve => resolve(games));
};

export const fetchGameById = async id => {
  return new Promise((resolve, reject) => {
    const game = R.find(R.propEq('id', id), games);
    resolve(game);
  });
};

export const fetchCategories = async () => {
  return new Promise(resolve => resolve(categories));
};
