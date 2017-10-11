import React, { Component } from "react";
import Deck from "./Deck";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { game: 0, size: 8, highscore: {} };
    this.restart = this.restart.bind(this);
    this.win = this.win.bind(this);
  }

  restart() {
    this.setState({ game: this.state.game + 1 });
  }

  win(tries) {
    if (
      this.state.highscore[this.state.size] === undefined ||
      tries < this.state.highscore
    ) {
      let newHighscore = Object.assign(this.state.highscore);
      newHighscore[this.state.size] = tries;
      this.setState({ highscore: newHighscore });
      return "Congrats, you set a new highscore";
    } else if (tries === this.state.highscore[this.state.size]) {
      return "Nice, you did as good as the highscore";
    } else {
      return `Try again, your score was ${tries}, that is not good enough for a highscore`;
    }
  }

  render() {
    let highscore = this.state.highscore[this.state.size];
    let highscoreMessage = "No highscore is been set yet, be the first";
    if (highscore !== undefined) {
      highscoreMessage = "The current highscore is " + highscore;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <p>{highscoreMessage}</p>
          <button onClick={this.restart}> Restart </button>
        </header>
        <Deck
          size={this.state.size}
          key={this.state.game}
          win={this.win}
          restart={this.restart}
        />
      </div>
    );
  }
}

export default App;
