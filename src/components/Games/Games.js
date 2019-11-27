import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchGames } from '../../redux/actions/gamesAction';
import { getGames } from '../../utils/selectors';
import styled from 'styled-components';
import * as R from 'ramda';

// const Games = props => {
//   useEffect(() => {
//     props.fetchGames();
//   });
//   console.log(`props: `, props);
//   return <div>Games</div>;
// };

class Games extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  renderGames(game) {
    const { id, img, title, description, downloads } = game;
    return (
      <GameCardTag key={id}>
        <img src={img} alt={title} />
        <Head2Tag>{title}</Head2Tag>
        <Head4Tag>{`${R.take(50, description)}...`}</Head4Tag>
        <NavLink to={`/games/${id}`}>Detail</NavLink>
        <Head4Tag>{`Downloads: ${downloads}`}</Head4Tag>
      </GameCardTag>
    );
  }

  render() {
    const { games } = this.props;
    return (
      <GamesListTag>{games.map(game => this.renderGames(game))}</GamesListTag>
    );
  }
}

const mapStateToProps = state => ({
  games: getGames(state),
});

const mapDispatchToProps = {
  fetchGames,
};

const GamesListTag = styled.div`
  text-align: center;
`;
const GameCardTag = styled.div`
  margin: 5px;
  padding: 5px;
  width: 250px;
  height: 330px;
  text-align: -webkit-center;
  border: 2px solid #7b808a;
  border-radius: 10px;
  text-align: -webkit-center;
  text-decoration: none;
  display: inline-block;
  flex-direction: column;
`;
const Head2Tag = styled.h2`
  margin: 5px 0;
`;
const Head4Tag = styled.h4`
  margin: 5px 0;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Games);
