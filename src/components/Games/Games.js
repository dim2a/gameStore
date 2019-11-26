import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchGames } from '../../redux/actions/gamesAction';

const Games = props => {
  useEffect(() => {
    props.fetchGames();
  });
  return <div>Games</div>;
};

const mapDispatchToProps = {
  fetchGames,
};

export default connect(null, mapDispatchToProps)(Games);
