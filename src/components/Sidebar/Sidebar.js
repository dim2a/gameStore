import React from 'react';
import classes from './Sidebar.module.css';
import Categories from '../Categories/Categories';

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <Categories />
    </div>
  );
};

export default Sidebar;
