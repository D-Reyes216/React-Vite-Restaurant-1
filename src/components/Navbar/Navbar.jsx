import React, { useState } from 'react'
import  {GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

import './Navbar.css'
const Navbar = () => {
  const [toggleDropdown, setDropdown] = useState(false)

  const scroll = (e) => {
    window.scrollTo({
    top: document.querySelector(e).offsetTop,
    behavior: "smooth",
  })}

  return (
    <div className='app__navbar'>
      <div id='logo-title'>
        <img className='app__navbar-logo' src='src/assets/images/cc_logo.png' alt='cc-logo' />
        <img className='app__navbar-title' src='src/assets/images/cc-title.png' alt='cc-title' />
      </div>
      {/* links to different sections of website */}
      <ul className='app__navbar-links'>
        <li onClick={(e) => {e.preventDefault(); scroll('.app__navbar')}} >Home</li>
        <li onClick={(e) => {e.preventDefault(); scroll('.app__menu')}}>Menu</li>
        <li onClick={(e) => {e.preventDefault(); scroll('.app__gallery')}}>Gallery</li>
        <li onClick={(e) => {e.preventDefault(); scroll('.app__contact')}}>Contact</li>
        <li onClick={(e) => {e.preventDefault(); scroll('.app__bookingReservation')}}>Booking & Reservations</li>
      </ul>

      {/* button hidden on larger screens and appears on smaller screens to display menu when clicked*/}
      <div>
        <GiHamburgerMenu className='app__navbar-dropdown' onClick={() => setDropdown(true)}/>

        {toggleDropdown && (
          // menu for smaller screens that is displayed after the button above is clicked
          <div className='app__navbar-overlay'>
            <GrClose className='overlay__close' onClick={() => setDropdown(false)}/>

            <ul>
            <li onClick={(e) => {e.preventDefault(); scroll('.app__navbar')}} >Home</li>
            <li onClick={(e) => {e.preventDefault(); scroll('.app__menu')}}>Menu</li>
            <li onClick={(e) => {e.preventDefault(); scroll('.app__gallery')}}>Gallery</li>
            <li onClick={(e) => {e.preventDefault(); scroll('.app__contact')}}>Contact</li>
            <li onClick={(e) => {e.preventDefault(); scroll('.app__bookingReservation')}}>Booking & Reservations</li>
            </ul>
          </div>
          )}
          
      </div>
    </div>

  )
}

export default Navbar