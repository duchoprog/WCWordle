import React from 'react'
import './key.css'

const Key = ({value}) => {
  const handleKeyClick = ()=>{
    console.log(value);
  }
  return (
    <div className="key" onClick={handleKeyClick}>{value}</div>
  )
}

export default Key