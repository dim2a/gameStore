import React from 'react';
import { connect } from 'react-redux';
import {
  getCartCount,
  getTotalPrice,
  getCartGames,
} from '../../utils/selectors';
import classes from './Cart.module.css';

const renderItems = games => {
  return games.map(game => {
    return (
      <div className={classes.item}>
        <img src={game.img} alt="game" className={classes.img} />
        <h2 className={classes.title}>{game.title}</h2>
        <h4 className={classes.price}>{`${game.price}$`}</h4>
      </div>
    );
  });
};

const Cart = ({ cartCount = 0, price, games }) => {
  console.log('cart: ', games);
  return (
    <div>
      <h4>{`Items: ${cartCount}`}</h4>
      {renderItems(games)}
      <h4>{`Total price: ${price}`}</h4>
    </div>
  );
};

const mapStateToProps = state => ({
  cartCount: getCartCount(state),
  price: getTotalPrice(state),
  games: getCartGames(state),
});

export default connect(mapStateToProps)(Cart);
