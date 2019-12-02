import * as R from 'ramda';

export const getGameById = (state, id) => {
  return R.prop(id, state.games);
};

export const getGames = state => {
  const games = R.map(id => getGameById(state, id), state.gamesPage.ids);
  return games;
};
