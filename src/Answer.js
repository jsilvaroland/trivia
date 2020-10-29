import React from 'react'

export default function Answer(props) {
  // const class = props.answered && /* correct answer */ ? 
  return (
    <button className={props.answer} onClick={e => props.checkAnswer(e)}>
      {props.answer}
    </button>
  )
}
