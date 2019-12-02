import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
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

  renderGames(games) {
    return games.map(game => {
      const { id, img, title, description, downloads } = game;
      return (
        <GameCardTag key={id}>
          <ImgTag src={img} alt={title} />
          <Head2Tag>{title}</Head2Tag>
          <Head4Tag>{`${R.take(50, description)}...`}</Head4Tag>
          <NavLink to={`/games/${id}`}>Detail</NavLink>
          <Head4Tag>{`Downloads: ${downloads}`}</Head4Tag>
        </GameCardTag>
      );
    });
  }

  render() {
    const { games } = this.props;
    return <GamesListTag>{games && this.renderGames(games)}</GamesListTag>;
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
const ImgTag = styled.img`
  max-width: 180px;
  max-height: 180px;
`;
const Head2Tag = styled.h2`
  margin: 5px 0;
`;
const Head4Tag = styled.h4`
  margin: 5px 0;
`;

let WithUrlDataComponent = withRouter(Games);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataComponent);
