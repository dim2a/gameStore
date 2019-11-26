import React from 'react';
import styled from 'styled-components';

const Layout = props => {
  return <LayoutTag>{props.children}</LayoutTag>;
};

const LayoutTag = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 3fr 10fr;
  grid-gap: 10px;
  grid-template-areas: 'header header' 'sidebar content';
  max-width: 1200px;
  margin: 0 auto;
`;

export default Layout;