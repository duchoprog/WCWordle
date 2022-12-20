import React from 'react'
import './LetterBox.css'

function LetterBox(props) {
  return (
    <div className={'letterbox open ' + props.color}>{props.letter.toUpperCase()}</div>
  )
}

export default LetterBox