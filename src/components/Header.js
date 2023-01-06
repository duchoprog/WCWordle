import React from 'react'
import './header.css'
import { IoIosStats } from "react-icons/io";


const Header = ({setIsOpen}) => {
  return (
    <div className='header'>
        <h1>Ordle</h1> <IoIosStats className="statsIcon" onClick={()=>{setIsOpen(true)}} />
    </div>
  )
}

export default Header