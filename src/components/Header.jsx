import React from 'react'
import Logo from '../assets/logo.webp'
import '../styles/Header.css'
const Header = () => {
  return (
    <div className='header-component'>
        <div className="logo">
            <img src={Logo} alt="logo" className='logo' />
        </div>
        <div className="app-title">Youtube Converter</div>
    </div>
  )
}

export default Header