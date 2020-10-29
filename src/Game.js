import React, { Component } from 'react';
import JSON from './Apprentice_TandemFor400_Data.json';
import Answer from './Answer';
import EndScreen from './EndScreen';

export default class Game extends Component {
  constructor(props) {
    super(props);
    const questions = this.shuffle(JSON).slice(0,10);
    const currentQ = questions.pop();
    this.state = {
      questions,
      currentQ,
      response: '',
      answered: false,
      end: false,
    };
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  reset() {
    const questions = this.shuffle(JSON).slice(0,10);
    const currentQ = questions.pop();
    this.setState({ questions, currentQ, response: '', answered: false });
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
      this.setState({ response: "Correct!", answered: true });
    } else {
      const ele = document.getElementsByClassName(e.target.innerHTML)[0];
      ele.classList.add('red');
      this.setState({ response: 'Incorrect!', answered: true });
    }
    const correct = document.getElementsByClassName(currentQ.correct)[0];
    correct.classList.add('green');
    
    const that = this;
    setTimeout(function() {
      that.setState({ response: '' });
      if (that.state.questions.length === 0) {
        that.endRound();
      } else {
        that.nextQuestion();
      }
    }, 2000);
  }

  endRound() {
    this.setState({ end: true });
  }

  render() {
    const answers = this.state.currentQ.incorrect.concat(this.state.currentQ.correct);
    console.log(this.state);
    if (this.state.end) {
      return (
        <EndScreen 
          score={this.props.score}
          clickPlay={this.props.clickPlay}
        />
      )
    } else {
      return (
        <React.Fragment>
          <h1>Question #{10 - this.state.questions.length}</h1>
          <p>{this.state.currentQ.question}</p>
            {
              answers.map(answer => (
                <Answer
                  key={answer}
                  answer={answer}
                  answered={this.state.answered}
                  answered = {this.state.answered}
                  checkAnswer={this.checkAnswer}
                />
              ))
            }
          <p>{this.state.response}</p>
        </React.Fragment>
      )
    }
  }
}
