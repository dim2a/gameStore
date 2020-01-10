import React from 'react';
import classes from './Header.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartCount } from '../../utils/selectors';
import cartImg from './Cart.png';
import logo from './logo.png';

const Header = ({ cartCount }) => {
  return (
    <div className={classes.Header}>
      <NavLink className={classes.logo} to={`/`}>
        <img src={logo} alt="logo" className={classes.logo} />
      </NavLink>
      <NavLink to={`/cart`}>
        <img className={classes.cart} src={cartImg} alt="cart" />
        {cartCount > 0 && <div className={classes.counter}>{cartCount}</div>}
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => ({
  cartCount: getCartCount(state),
});

export default connect(mapStateToProps)(Header);
