import store from './temp';

export const fetchGames = async () => {
  const { games } = store;
  return new Promise(resolve => resolve(games));
};
