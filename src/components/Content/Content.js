import React from 'react';
import styled from 'styled-components';

const Content = props => {
  return <ContentTag>{props.children}</ContentTag>;
};

const ContentTag = styled.div`
  grid-area: content;
  background-color: red;
`;

export default Content;
