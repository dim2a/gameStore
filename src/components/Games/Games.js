import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGames, fetchCategories } from '../../redux/actions/gamesAction';
import { getGames } from '../../utils/selectors';
//import classes from './Games.module.css';
import Card from '../../containers/Card/Card';
import Grid from '@material-ui/core/Grid';

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
      return (
        <Grid item xs={12} sm={6} md={3} lg={2} key={game.id}>
          <Card game={game} key={game.id} />
        </Grid>
      );
    });
  };

  const { games } = props;
  return (
    <Grid container spacing={3}>
      {games && renderGames(games)}
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => ({
  games: getGames(state, ownProps),
});

const mapDispatchToProps = {
  fetchGames,
  fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
