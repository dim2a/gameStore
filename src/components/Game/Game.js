import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './Game.module.css';
import { fetchGameById, addGameToCart } from '../../redux/actions/gamesAction';
import { getGameById } from '../../utils/selectors';

const Game = props => {
  useEffect(() => {
    props.fetchGameById(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gameRender = game => {
    const { addGameToCart } = props;
    const { title, img, description, price, id } = game;
    return (
      <>
        <h2>{title}</h2>
        <div className={classes.wrapper}>
          <img className={classes.icon} src={img} alt={title} />
          <p>{description}</p>
        </div>
        <div className={classes.order}>
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
  };

  const { game } = props;
  return <div>{game && gameRender(game)}</div>;
};

const mapStateToProps = state => ({
  game: getGameById(state, state.gamePage.id),
});

const mapDispatchToProps = {
  fetchGameById,
  addGameToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
