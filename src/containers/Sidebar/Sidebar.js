import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = ({ children }) => {
  return <div className={classes.Sidebar}>{children}</div>;
};

export default Sidebar;
