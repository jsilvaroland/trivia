import React, { Component } from 'react';
import JSON from './Apprentice_TandemFor400_Data.json';
import Answer from './Answer';

export default class Game extends Component {
  constructor(props) {
    super(props);
    const questions = this.shuffle(JSON).slice(0,10);
    const currentQ = questions.pop();
    this.state = {
      questions,
      currentQ,
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
    const { currentQ } = this.state;
    if (currentQ.correct === e.target.innerHTML) {
      this.props.increaseScore();
    } else {
      const ele = document.getElementsByClassName(e.target.innerHTML)[0];
      ele.classList.add('red');
    }
    const correct = document.getElementsByClassName(currentQ.correct)[0];
    correct.classList.add('green');
    
    const that = this;
    setTimeout(function() {
        if (that.state.questions.length === 0) {
          that.props.clickPlay();
        } else {
          that.nextQuestion();
        }
    }, 2000);
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
