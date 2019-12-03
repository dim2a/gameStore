import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getCartCount } from '../../utils/selectors';

const Header = ({ cartCount }) => {
  return (
    <HeaderTag>
      <ImgTag
        src="https://static.thenounproject.com/png/16229-200.png"
        alt="cart"
      />
      {cartCount && <CounterTag>{cartCount}</CounterTag>}
    </HeaderTag>
  );
};

const mapStateToProps = state => ({
  cartCount: getCartCount(state),
});

const HeaderTag = styled.div`
  grid-area: header;
  background-color: green;
  position: relative;
`;
const ImgTag = styled.img`
  max-height: 65px;
  max-width: 65px;
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
