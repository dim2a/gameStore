import React from 'react';
import { connect } from 'react-redux';
import { getCartCount, getTotalPrice } from '../../utils/selectors';
const Cart = ({ cartCount, price }) => {
  return (
    <div>
      <h4>{`Items: ${cartCount}`}</h4>
      <h4>{`Total price: ${price}`}</h4>
    </div>
  );
};

const mapStateToProps = state => ({
  cartCount: getCartCount(state),
  price: getTotalPrice(state),
});

export default connect(mapStateToProps)(Cart);
