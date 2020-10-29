import React from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Game';
import StartScreen from './StartScreen';
import EndScreen from './EndScreen';

// randomize answer order
// style it
// screen for showing answers
// screen for 10/10

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playing: null,
      score: 0,
    };
    this.clickPlay = this.clickPlay.bind(this);
    this.increaseScore = this.increaseScore.bind(this);
  }

  clickPlay() {
    const { playing } = this.state;
    // 
    playing !== true ? this.setState({ playing: true, score: 0 }) : this.setState({ playing: false });
  }

  increaseScore() {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    const { playing } = this.state;
    let load;
    if (playing === null) {
      load = <StartScreen clickPlay={this.clickPlay}/>
    } else if (playing === true) {
      load = <Game 
              increaseScore={this.increaseScore}
              clickPlay={this.clickPlay}
              score={this.state.score}
              />
    } else {
      load = <EndScreen score={this.state.score}
              clickPlay={this.clickPlay}
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
