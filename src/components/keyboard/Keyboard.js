import React from 'react'
import KBLine from './KBLine'
import './keyboard.css'



const keyboard = ({layout, processLetter}) => {
  console.log(processLetter)
  return(
    <div className='keyboard'>
   {   layout.map(
        (line,i)=>{
          return(
            <KBLine line={line} key={"line"+i} processLetter={processLetter}  />
          )

        }
      )}
    </div>
    
  )
 
}

export default keyboard