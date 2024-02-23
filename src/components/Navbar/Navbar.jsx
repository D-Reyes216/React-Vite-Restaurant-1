import React, { useState } from 'react'
import  {GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import images from '../../assets/images.js'

import './Navbar.css'
const Navbar = () => {
  //state to toggle dropdown navigation menu for smaller screens
  const [toggleDropdown, setDropdown] = useState(false)

  const scroll = (e) => {
    window.scrollTo({
    top: document.querySelector(e).offsetTop,
    behavior: "smooth",
  })}

  return (
    <div className='app__navbar app__section'>
      <div id='logo-title'>
        <img className='app__navbar-logo' src={images.cc_logo} alt='cc-logo' />
        <img className='app__navbar-title' src={images.cc_title} alt='cc-title' />
      </div>
      {/* links to different sections of website */}
      <ul className='app__navbar-links'>
        <li onClick={(e) => {e.preventDefault(); scroll('.app__menu')}}>Menu</li>
        <li onClick={(e) => {e.preventDefault(); scroll('.app__gallery')}}>Gallery</li>
        <li onClick={(e) => {e.preventDefault(); scroll('.app__contact')}}>Contact</li>
        <li onClick={(e) => {e.preventDefault(); scroll('.app__bookingReserve')}}>Booking & Reservations</li>
      </ul>

      {/* button hidden on larger screens and appears on smaller screens to display menu when clicked*/}
      <div>
        <GiHamburgerMenu className='app__navbar-dropdown' onClick={() => setDropdown(true)}/>

        {toggleDropdown && (
          // menu for smaller screens that is displayed after the button above is clicked
          <div className='app__navbar-overlay'>
            <GrClose className='overlay__close' onClick={() => setDropdown(false)}/>

            <ul>
            <li onClick={(e) => {e.preventDefault(); scroll('.app__navbar'); setDropdown(false)}} >Home</li>
            <li onClick={(e) => {e.preventDefault(); scroll('.app__menu'); setDropdown(false)}}>Menu</li>
            <li onClick={(e) => {e.preventDefault(); scroll('.app__gallery'); setDropdown(false)}}>Gallery</li>
            <li onClick={(e) => {e.preventDefault(); scroll('.app__contact'); setDropdown(false)}}>Contact</li>
            <li onClick={(e) => {e.preventDefault(); scroll('.app__bookingReserve'); setDropdown(false)}}>Booking & Reservations</li>
            </ul>
          </div>
          )}
          
      </div>
    </div>

  )
}

export default Navbar