import React, { Component } from 'react';
import JSON from './Apprentice_TandemFor400_Data.json';
import Answer from './Answer'

export default class Game extends Component {
  constructor() {
    super();
    const questions = this.shuffle(JSON).slice(0,10);
    const currentQ = questions.pop();
    this.state = {
      questions,
      currentQ,
      answered: false,
      score: 0
    };
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  nextQuestion() {
    const currentQ = this.state.questions[0];
    const questions = this.state.questions.slice(1);
    this.setState({ 
      currentQ, questions
    });
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  checkAnswer(e) {
    const ele = document.getElementsByClassName(e.target.innerHTML)[0];
    // const answerTimer = setTimeout((ele, color) => ele.classname = color, 500);
    if (this.state.currentQ.correct === ele.innerHTML) {
      this.setState({ score: this.state.score + 1 });
    } else {
      // highlight clicked answer red
    }
    // either way, highlight correct answer green
    this.setState({ answered: true });

    // set timeout
      // progress to next question, set answered to false
  }

  render() {
    const answers = this.state.currentQ.incorrect.concat(this.state.currentQ.correct);
    console.log(this.state);
    return (
      <React.Fragment>
        <h1>Question #{10 - this.state.questions.length}</h1>
        <p>{this.state.currentQ.question}</p>
          {
            answers.map(answer => (
              <Answer
                key={answer}
                answer={answer}
                answered = {this.state.answered}
                checkAnswer={this.checkAnswer}
              />
            ))
          }
      </React.Fragment>
    )
  }
}
