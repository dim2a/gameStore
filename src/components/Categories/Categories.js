import React, { Component } from 'react';
import classes from './Categories.module.css';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { searchGame } from '../../redux/actions/gamesAction';
import { getCategories } from '../../utils/selectors';

class Categories extends Component {
  state = {
    value: '',
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.searchGame(this.state.value);
  };

  inputChangeHandler = e => {
    this.setState({ value: e.target.value });
  };

  categoriesRender = () => {
    const { categories } = this.props;
    return categories.map(category => {
      const { id, name } = category;
      return (
        <button key={id}>
          <NavLink to={`/categories/${id}`}>{name}</NavLink>
        </button>
      );
    });
  };

  render() {
    const { categories } = this.props;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            className={classes.input}
            onChange={this.inputChangeHandler}
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
            {categories && this.categoriesRender()}
          </div>
        </form>
      </div>
    );
  }
}

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
