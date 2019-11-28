import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGameById } from '../../redux/actions/gamesAction';

class Game extends Component {
  componentDidMount() {
    this.props.fetchGameById(this.props.match.params.id);
  }
  render() {
    return <div>{`GameId ${this.props.match.params.id}`}</div>;
  }
}

const mapDispatchToProps = {
  fetchGameById,
};

export default connect(null, mapDispatchToProps)(Game);
