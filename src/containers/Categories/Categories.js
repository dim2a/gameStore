import React from 'react';
import Tabs from '../../components/Tabs/Tabs';
import { connect } from 'react-redux';
import { getCategories } from '../../utils/selectors';

const Categories = props => {
  const { categories } = props;

  return (
    <div>
      <Tabs categories={categories}></Tabs>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: getCategories(state),
});

export default connect(mapStateToProps)(Categories);
