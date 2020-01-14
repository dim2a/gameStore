import React, { useState } from 'react';
import SearchInput from '../../components/MaterialUI/Search/Search';
import { connect } from 'react-redux';
import { searchGame } from '../../redux/actions/gamesAction';
import { withRouter } from 'react-router-dom';
import * as R from 'ramda';
import classes from './Search.module.css';

const Search = props => {
  const [valueInput, changeValueInput] = useState('');
  const [listStatus, changeStatus] = useState(false);

  const inputChangeHandler = e => {
    changeValueInput(e.target.value);
    changeStatus(true);
  };

  const clickItemHandler = id => {
    props.history.push(`/games/${id}`);
  };

  const renderSearchList = () => {
    if (listStatus) {
      const searchGames = Object.values(props.games).filter(game => {
        return R.contains(
          valueInput.toLowerCase(),
          R.prop('title', game).toLowerCase()
        );
      });

      return (
        <div className={classes.list}>
          {searchGames.map(game => {
            const { id, img, title } = game;
            return (
              <div
                key={id}
                className={classes.listItem}
                onMouseDown={() => clickItemHandler(id)}
              >
                <img className={classes.listImg} src={img} alt="img" />
                <h3>{title}</h3>
              </div>
            );
          })}
        </div>
      );
    }
  };

  const onblurHandler = () => {
    changeStatus(false);
  };

  const submitForm = event => {
    event.preventDefault();
    props.history.push('/');
    props.searchGame(valueInput);
  };

  return (
    <div onBlur={onblurHandler}>
      <SearchInput inputHandler={inputChangeHandler} submitForm={submitForm} />
      {renderSearchList()}
    </div>
  );
};

const mapDispatchToProps = {
  searchGame,
};

const mapStateToProps = state => ({
  games: state.games,
});

export default R.compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Search);
