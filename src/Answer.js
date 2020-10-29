import React from 'react'

export default function Answer(props) {
  return (
    <button className={props.answer} onClick={e => props.checkAnswer(e)}>
      {props.answer}
    </button>
  )
}
