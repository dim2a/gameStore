import * as R from 'ramda';
import axios from 'axios';

export const fetchGames = async () => {
  try {
    const { data } = await axios.get(
      'https://game-store-433b4.firebaseio.com/games/-LvuAqMwXqWNVsZDIsyV.json'
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchGameById = async id => {
  try {
    const { data } = await axios.get(
      'https://game-store-433b4.firebaseio.com/games/-LvuAqMwXqWNVsZDIsyV.json'
    );
    return new Promise((resolve, reject) => {
      const game = R.find(R.propEq('id', id), data);
      resolve(game);
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(
      'https://game-store-433b4.firebaseio.com/categories/-LvokPSd3V-f2oKXChtx.json'
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const pachGames = games => {
  games.map(game => {
    const newData = game.downloads + 1;
    axios.patch(
      `https://game-store-433b4.firebaseio.com/games/-LvuAqMwXqWNVsZDIsyV/${+game.id -
        1}.json`,
      { downloads: newData }
    );
    return null;
  });
  alert('Games are bought');
};
