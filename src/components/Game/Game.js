import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './Game.module.css';
import { fetchGameById, addGameToCart } from '../../redux/actions/gamesAction';
import { getGameById } from '../../utils/selectors';

class Game extends Component {
  componentDidMount() {
    const { fetchGameById, match } = this.props;
    fetchGameById(match.params.id);
  }

  gameRender(game) {
    const { addGameToCart } = this.props;
    const { title, img, description, price, id } = game;
    return (
      <>
        <h2>{title}</h2>
        <div className={style.wrapper}>
          <img className={style.icon} src={img} alt={title} />
          <p>{description}</p>
        </div>
        <div className={style.order}>
          <div>
            <button onClick={() => addGameToCart(id)}>Add to cart</button>
            <button onClick={() => addGameToCart(id)}>
              <NavLink to={`/cart`}>Buy now</NavLink>
            </button>
          </div>
          <h4>{`Price: ${price}$`}</h4>
        </div>
      </>
    );
  }

  render() {
    const { game } = this.props;
    return <div>{game && this.gameRender(game)}</div>;
  }
}

const mapStateToProps = state => ({
  game: getGameById(state, state.gamePage.id),
});

const mapDispatchToProps = {
  fetchGameById,
  addGameToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
