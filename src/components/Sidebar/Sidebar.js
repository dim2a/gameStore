import React, { Component } from 'react';
import classes from './Sidebar.module.css';
import { connect } from 'react-redux';
import { searchGame } from '../../redux/actions/gamesAction';

class Sidebar extends Component {
  state = {
    value: '',
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.searchGame(this.state.value);
  };

  inputChangeHandler = e => {
    this.setState({ value: e.target.value });
    console.log(`value: `, this.state.value);
  };
  render() {
    return (
      <div className={classes.Sidebar}>
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
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchGame,
};

export default connect(null, mapDispatchToProps)(Sidebar);
