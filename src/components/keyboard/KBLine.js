import React from 'react'
import './kbline.css'
import Key from './Key'

const KBLine = ({line, processLetter}) => {
    
  return (
    <div className='kbLine'>
        {
           line.map(
            (letter,i)=>{             
                    return  typeof letter === "string" ? 
                    <Key value={letter.text} key={letter.text} processLetter = {processLetter} className={letter.text +" "+ letter.color}/> 
                    :<Key value={letter.text} key={letter.text} className={"key " + letter.text + " " + letter.color} processLetter = {processLetter} /> 
                
            }
           )
      
        }
       
    </div>
  )
}

export default KBLine