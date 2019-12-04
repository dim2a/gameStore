import React from 'react';
import styled from 'styled-components';

const Content = ({ children }) => {
  return <ContentTag>{children}</ContentTag>;
};

const ContentTag = styled.div`
  grid-area: content;
  background-color: #eee;
  padding: 10px;
`;

export default Content;
