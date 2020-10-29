import React from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Game';
import StartScreen from './StartScreen';

// start page
// click start
// then randomize the trivia order,
// when click start, game starts playing

// after an answer is clicked, reveal correct answer and add to score
// then go to next question

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playing: false,
      score: 0,
    };
    this.clickPlay = this.clickPlay.bind(this);
  }

  clickPlay() {
    this.setState({ playing: true });
  }

  render() {
    return (
      <div className="App">
        {this.state.playing ? <Game /> : <StartScreen clickPlay={this.clickPlay} />}
      </div>
    );
  }
}

export default App;
