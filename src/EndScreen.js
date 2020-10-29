import React from 'react'

export default function EndScreen(props) {
  let message;
  if (props.score < 6) {
    message = 'Oof!';
  } else if (props.score < 8) {
    message = 'Not bad!';
  } else {
    message = 'Congratulations!';
  }
  return (
    <div>
      {message} Your score was {props.score}/10!
      <button onClick={props.clickPlay}>Play Again</button>
    </div>
  )
}