import React, { Component } from 'react'

export default class StartScreen extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Trivia! The rules are simple: there are 10 questions total, and you will have 15 seconds to answer each of them. If you get them all right you get a cool congratulations screen!</p>
        <button onClick={() => this.props.clickPlay()}>Start Game</button>
      </div>
    )
  }
}
