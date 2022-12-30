import React from 'react'
import LetterBox from './LetterBox'
import './line.css'

const Line = ({lineNumber, line, colors}) => {
let brokenLine=[...line]  
let loadedLine=[]  

brokenLine.forEach((letter, index)=>{
  if(!letter){letter=" "}
  loadedLine.push(<LetterBox key={lineNumber*10+index+1} letter={letter} bgcolor={colors[index]}></LetterBox>)
})

  return (
    <div className='line open'>
      {loadedLine}

    </div>
  )
}

export default Line