import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { fetchGames, fetchCategories } from '../../redux/actions/gamesAction';
import { getGames } from '../../utils/selectors';
import style from './Games.module.css';
import * as R from 'ramda';

const Games = props => {
  useEffect(() => {
    props.fetchGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    props.fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderGames = games => {
    return games.map(game => {
      const { id, img, title, description, downloads } = game;
      return (
        <div className={style.card} key={id}>
          <img className={style.icon} src={img} alt={title} />
          <h2 className={style.title}>{title}</h2>
          <h4 className={style.title}>{`${R.take(50, description)}...`}</h4>
          <NavLink to={`/games/${id}`}>Detail</NavLink>
          <h4>{`Downloads: ${downloads}`}</h4>
        </div>
      );
    });
  };

  const { games } = props;
  return <div className={style.list}>{games && renderGames(games)}</div>;
};

const mapStateToProps = (state, ownProps) => ({
  games: getGames(state, ownProps),
});

const mapDispatchToProps = {
  fetchGames,
  fetchCategories,
};

const WithUrlDataComponent = withRouter(Games);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataComponent);
