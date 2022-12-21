import React from 'react'
import './key.css'

const Key = ({value, processLetter}) => {
  const handleKeyClick = ()=>{
    processLetter(value)
  }
  return (
    <div className="key" onClick={handleKeyClick}>{value}</div>
  )
}

export default Key