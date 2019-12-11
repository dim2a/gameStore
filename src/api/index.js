import * as R from 'ramda';
import axios from 'axios';

export const fetchGames = async () => {
  const { data } = await axios.get(
    'https://game-store-433b4.firebaseio.com/games/-LvoSUF9dx14udApLJZY.json'
  );
  return data;
};

export const fetchGameById = async id => {
  const { data } = await axios.get(
    'https://game-store-433b4.firebaseio.com/games/-LvoSUF9dx14udApLJZY.json'
  );
  return new Promise((resolve, reject) => {
    const game = R.find(R.propEq('id', id), data);
    resolve(game);
  });
};

export const fetchCategories = async () => {
  const { data } = await axios.get(
    'https://game-store-433b4.firebaseio.com/categories/-LvokPSd3V-f2oKXChtx.json'
  );
  return data;
};
