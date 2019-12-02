import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchGameById } from '../../redux/actions/gamesAction';
import { getGameById } from '../../utils/selectors';

class Game extends Component {
  componentDidMount() {
    console.log(`componentDidMount`);
    this.props.fetchGameById(this.props.match.params.id);
  }

  gameRender(game) {
    console.log(`gameRender`);
    const { title, img, description, price } = game;
    return (
      <>
        <h2>{title}</h2>
        <WrapperTag>
          <ImgTag src={img} alt={title} />
          <p>{description}</p>
        </WrapperTag>
        <OrderWrapperTag>
          <button>Buy now</button>
          <h4>{`Price: ${price}$`}</h4>
        </OrderWrapperTag>
      </>
    );
  }

  render() {
    console.log('render');
    const { game } = this.props;
    return <div>{game && this.gameRender(game)}</div>;
  }
}

const mapStateToProps = state => {
  console.log(`mapStateToProps`);
  return {
    game: getGameById(state, state.gamePage.id),
  };
};

const mapDispatchToProps = {
  fetchGameById,
};

const WrapperTag = styled.div`
  display: flex;
`;
const ImgTag = styled.img`
  max-width: 180px;
  max-height: 180px;
  margin: auto 10px auto 0;
`;
const OrderWrapperTag = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Game);
