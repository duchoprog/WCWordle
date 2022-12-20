import React from 'react'
import KBLine from './KBLine'
import './keyboard.css'



const keyboard = ({layout}) => {
  return(
    <div className='keyboard'>
   {   layout.map(
        (line,i)=>{
          return(
            <KBLine line={line} key={"line"+i}/>
          )

        }
      )}
    </div>
    
  )
 
}

export default keyboard