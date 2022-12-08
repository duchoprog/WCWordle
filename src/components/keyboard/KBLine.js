import React from 'react'
import './kbline.css'
import Key from './Key'

const KBLine = ({line}) => {
    
  return (
    <div className='kbLine'>
        {
           line.row.map(
            (letter,i)=>{
                console.log(letter, typeof letter)
                    
                    return  typeof letter === "string" ? 
                    <Key value={letter} key={letter} /> 
                    :<Key value={letter.text} key={letter.text} className={letter.text} />
                
            }
           )
      
        }
       
    </div>
  )
}

export default KBLine