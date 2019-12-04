import * as R from 'ramda';

export const getGameById = (state, id) => {
  return R.prop(id, state.games);
};

export const getGames = state => {
  const applySearch = item =>
    R.contains(state.gamesPage.search, R.prop('title', item));
  const games = R.compose(
    R.filter(applySearch),
    R.map(id => getGameById(state, id))
  )(state.gamesPage.ids);
  // const games = R.map(id => getGameById(state, id), state.gamesPage.ids);
  return games;
};

export const getCartCount = state => state.cart.length;

export const getTotalPrice = state => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map(id => getGameById(state, id))
  )(Object.values(state.cart));
  return totalPrice;
};
