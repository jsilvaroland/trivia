import React from 'react';
import './App.css';

import Game from './Game';
import StartScreen from './StartScreen';

// randomize answer order
// style it
// fix so can't click over and over
// screen for 10/10

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playing: false,
      score: 0,
    };
    this.clickPlay = this.clickPlay.bind(this);
    this.increaseScore = this.increaseScore.bind(this);
  }

  clickPlay() {
    const { playing } = this.state;
    this.setState({ playing: !playing, score: 0 });
  }

  increaseScore() {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    const { playing } = this.state;
    let load;
    if (!playing) {
      load = <StartScreen clickPlay={this.clickPlay}/>
    } else if (playing === true) {
      load = <Game 
              increaseScore={this.increaseScore}
              clickPlay={this.clickPlay}
              score={this.state.score}
              />
    }

    return (
      <div className="App">
        {load}
      </div>
    );
  }
}

export default App;
