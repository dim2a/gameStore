import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderTag>
      Header
      <ImgTag
        src="https://static.thenounproject.com/png/16229-200.png"
        alt="cart"
      />
    </HeaderTag>
  );
};

const HeaderTag = styled.div`
  grid-area: header;
  background-color: green;
`;
const ImgTag = styled.img`
  max-height: 60px;
  max-width: 60px;
`;

export default Header;
