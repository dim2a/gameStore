import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return <SidebarTag>Sidebar</SidebarTag>;
};

const SidebarTag = styled.div`
  grid-area: sidebar;
  background-color: blue;
`;

export default Sidebar;
