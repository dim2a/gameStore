import React from 'react';
import { connect } from 'react-redux';
import classes from './Cart.module.css';
import {
  getCartCount,
  getTotalPrice,
  getCartGames,
} from '../../utils/selectors';
import { deleteFromCart } from '../../redux/actions/gamesAction';

const Cart = ({ cartCount = 0, price, games, deleteFromCart }) => {
  const renderItems = games => {
    return games.map(game => {
      const { img, title, price, id } = game;
      return (
        <div className={classes.item} key={id}>
          <img src={img} alt="game" className={classes.img} />
          <h2 className={classes.title}>{title}</h2>
          <h4 className={classes.price}>{`${price}$`}</h4>
          <button onClick={() => deleteFromCart(id)}>Delete</button>
        </div>
      );
    });
  };

  return (
    <div>
      <h4>{`Items: ${cartCount}`}</h4>
      {renderItems(games)}
      <h4>{`Total price: ${price}$`}</h4>
    </div>
  );
};

const mapStateToProps = state => ({
  cartCount: getCartCount(state),
  price: getTotalPrice(state),
  games: getCartGames(state),
});

const mapDispatchToProps = {
  deleteFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
