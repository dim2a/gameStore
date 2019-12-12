import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { fetchGames, fetchCategories } from '../../redux/actions/gamesAction';
import { getGames } from '../../utils/selectors';
import style from './Games.module.css';
import * as R from 'ramda';
// import axios from 'axios';
// import store from '../../api/temp';

// const Games = props => {
//   useEffect(() => {
//     props.fetchGames();
//   });
//   console.log(`props: `, props);
//   return <div>Games</div>;
// };

class Games extends Component {
  componentDidMount() {
    const { fetchGames, fetchCategories } = this.props;
    fetchGames();
    fetchCategories();
    // axios
    //   .get(
    //     'https://game-store-433b4.firebaseio.com/games/-LvoSUF9dx14udApLJZY.json'
    //   )
    //   .then(response => console.log('response: ', response))
    //   .catch(error => console.log('error: ', error));
    // axios
    //   .post('https://game-store-433b4.firebaseio.com/games.json', store.games)
    //   .then(response => console.log('response: ', response));
    //   const newData = {
    //     downloads: 3,
    //   };
    //   axios.patch(
    //     'https://game-store-433b4.firebaseio.com/games/-LvoSUF9dx14udApLJZY/0.json',
    //     newData
    //   );
  }

  renderGames(games) {
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
  }

  render() {
    const { games } = this.props;
    return <div className={style.list}>{games && this.renderGames(games)}</div>;
  }
}

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
