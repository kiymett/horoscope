import React from 'react'
import sonne from "../img/sonne.png"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={sonne} alt="sonne" width="100px" />
        </div>
        <div className='links'>
            <a href="#Horoskope">Horoscope</a>
            <a href="#Horoskope">Daily</a>
            <a href="#Horoskope">Tarot</a>
            <a href="#Horoskope">Article</a>
            <a href="#Horoskope">Contact</a>
        </div>
    </div>
  )
}

export default Navbar