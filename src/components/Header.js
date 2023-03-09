import React from 'react'
import './header.css'
import { IoIosStats, IoMdInformationCircleOutline } from "react-icons/io";


const Header = ({setIsOpen, setInfoIsOpen}) => {
  return (
    <div className='header'>
        <h1>WCWordle</h1> 
        <h4>Guess a FIFA WC 2022 player</h4>
        <div className="icons">
          <IoIosStats className="icon" onClick={()=>{setIsOpen(true)}} />
          <IoMdInformationCircleOutline className="icon" onClick={() => setInfoIsOpen(true)} />
        </div>
        
    </div>
  )
}

export default Header