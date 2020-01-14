import React from 'react';
import classes from './Header.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartCount } from '../../utils/selectors';
import logo from './logo.png';
import Cart from '../../components/MaterialUI/Cart/Cart';
import Search from '../Search/Search';

const Header = ({ cartCount }) => {
  return (
    <div className={classes.Header}>
      <NavLink className={classes.logo} to={`/`}>
        <img src={logo} alt="logo" className={classes.logo} />
      </NavLink>
      <Search />
      <NavLink to={`/cart`}>
        <Cart cartCount={cartCount} />
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => ({
  cartCount: getCartCount(state),
});

export default connect(mapStateToProps)(Header);
