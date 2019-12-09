import * as R from 'ramda';

export const getGameById = (state, id) => {
  return R.prop(id, state.games);
};

export const getGames = (state, ownProps) => {
  const activeCategoryId = ownProps.match.params.id;
  const applySearch = item =>
    R.contains(state.gamesPage.search, R.prop('title', item));

  const applyCategory = item =>
    R.equals(activeCategoryId, R.prop('categoryId', item));

  const games = R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
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

export const getCategories = state => {
  return R.values(state.categories);
};

export const getCartGames = state => {
  const cartIds = state.cart;
  const games = cartIds.map(id => getGameById(state, id));
  return games;
};
