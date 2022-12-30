import React from 'react'
import './key.css'

const Key = ({value, processLetter, className}) => {
  const handleKeyClick = ()=>{
    processLetter(value)
  }
  return (
    <div className={className} value={value} onClick={handleKeyClick}>{value}</div>
  )
}

export default Key