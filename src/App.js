import React from 'react';
import { connect } from "react-redux";
import { startGame } from "./actions/initialize";
import Game from "./components/game.jsx";
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.props.startGame();
  }

  getContent() {
    if(this.props.hasStarted)  {
      return (<Game />);
    } else {
      return (
        <header className="app-header">
          <h2>Lets Play TicTacToe!</h2>
          <br />
          <button className="btn btn-lg btn-primary" type="button" onClick={this.startGame}>Start the Game</button>
        </header>);
    }
  }

  render() {
    return (
      <div className="app">
          { this.getContent() }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasStarted: state.appState.gameStarted
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame())
})

const Application = connect(mapStateToProps, mapDispatchToProps)(App);
export default Application;
