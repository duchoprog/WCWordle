import React from 'react'
import Line from './Line'
import "./grid.css"

const Grid = ({guesses}) => {

  if(guesses.length>6){guesses.pop()}
   const formattedLines = [];
  guesses.forEach((line, index) => {
        formattedLines.push(<Line key={index} lineNumber={index} line={line.word} colors={line.colors}></Line>)
      
  })

  return (
    <div className="grid">
      {formattedLines}  
    </div>
  )
}

export default Grid

