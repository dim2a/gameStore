import React, { useState } from 'react';
import classes from './Categories.module.css';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { searchGame } from '../../redux/actions/gamesAction';
import { getCategories } from '../../utils/selectors';

const Categories = props => {
  console.log('props', props);
  const [valueInput, changeValueInput] = useState('');
  // state = {
  //   value: '',
  // };

  const submitHandler = e => {
    e.preventDefault();
    props.searchGame(valueInput);
  };

  const inputChangeHandler = e => {
    changeValueInput(e.target.value);
    console.log('changeValueInput', valueInput);
  };

  const categoriesRender = () => {
    const { categories } = props;
    return categories.map(category => {
      const { id, name } = category;
      return (
        <button key={id}>
          <NavLink to={`/categories/${id}`}>{name}</NavLink>
        </button>
      );
    });
  };

  const { categories } = props;
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className={classes.input}
          onChange={inputChangeHandler}
          type="text"
          placeholder="search game"
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
        <div>
          <button>
            <NavLink to={'/'}>All</NavLink>
          </button>
          {categories && categoriesRender()}
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  searchGame,
};

const mapStateToProps = state => ({
  categories: getCategories(state),
});

const WithUrlDataComponent = withRouter(Categories);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataComponent);
