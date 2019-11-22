import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <HeaderTag>Header</HeaderTag>;
};

const HeaderTag = styled.div`
  grid-area: header;
  background-color: green;
`;

export default Header;
