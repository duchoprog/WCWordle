import React from 'react'
import LetterBox from './LetterBox'
import './line.css'

const Line = () => {
  return (
    <div className='line open'>
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
    </div>
  )
}

export default Line