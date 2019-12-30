import React from 'react';
import style from './Header.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartCount } from '../../utils/selectors';
import classes from './Header.module.css';
import cartImg from './Cart.png';

const Header = ({ cartCount }) => {
  //const imgLink = 'https://static.thenounproject.com/png/16229-200.png';
  return (
    <div className={style.Header}>
      <NavLink className={classes.logo} to={`/`}>
        <h3>Store</h3>
      </NavLink>
      <NavLink to={`/cart`}>
        <img className={style.cart} src={cartImg} alt="cart" />
        {cartCount > 0 && <div className={style.counter}>{cartCount}</div>}
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => ({
  cartCount: getCartCount(state),
});

export default connect(mapStateToProps)(Header);
