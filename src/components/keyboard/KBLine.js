import React from 'react'
import './kbline.css'
import Key from './Key'

const KBLine = ({line, processLetter}) => {
    
  return (
    <div className='kbLine'>
        {
           line.row.map(
            (letter,i)=>{                
                    return  typeof letter === "string" ? 
                    <Key value={letter} key={letter} processLetter = {processLetter}/> 
                    :<Key value={letter.text} key={letter.text} className={letter.text} processLetter = {processLetter} />
                
            }
           )
      
        }
       
    </div>
  )
}

export default KBLine