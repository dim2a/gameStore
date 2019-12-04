import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartCount } from '../../utils/selectors';

const Header = ({ cartCount }) => {
  //debugger;
  return (
    <HeaderTag>
      <NavLink to={`/cart`}>
        <ImgTag
          src="https://static.thenounproject.com/png/16229-200.png"
          alt="cart"
        />
        {cartCount > 0 && <CounterTag>{cartCount}</CounterTag>}
      </NavLink>
    </HeaderTag>
  );
};

const mapStateToProps = state => {
  return {
    cartCount: getCartCount(state),
  };
};

const HeaderTag = styled.div`
  grid-area: header;
  background-color: green;
  position: relative;
`;
const ImgTag = styled.img`
  max-height: 65px;
  max-width: 65px;
  cursor: pointer;
`;
const CounterTag = styled.div`
  background-color: red;
  border-radius: 50%;
  color: black;
  font-size: 17px;
  text-align: center;
  line-height: 20px;
  height: 20px;
  width: 20px;
  position: absolute;
  position: absolute;
  top: 5px;
  left: 25px;
`;

export default connect(mapStateToProps)(Header);
