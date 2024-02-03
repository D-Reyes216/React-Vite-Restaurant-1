import React, { useState } from 'react'
import  {GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

import './Navbar.css'
const Navbar = () => {
  const [toggleDropdown, setDropdown] = useState(false)

  return (
    <div className="app__navbar">
      <div id="logo-title">
        <img className="app__navbar-logo" src="src/assets/images/cc_logo.png" alt="cc-logo" />
        <img className="app__navbar-title" src="src/assets/images/cc-title.png" alt="cc-title" />
      </div>
      <ul className="app__navbar-links">
        <li>Home</li>
        <li>Menu</li>
        <li>Gallery</li>
        <li>Contact</li>
        <li>Booking & Reservations</li>
      </ul>
      <div >
        <GiHamburgerMenu className="app__navbar-dropdown" onClick={() => setDropdown(true)}/>

        {toggleDropdown && (
          
          <div className="app__navbar-overlay">
            <GrClose className="overlay__close" onClick={() => setDropdown(false)}/>

            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Gallery</li>
              <li>Contact</li>
              <li>Booking & Reservations</li>
            </ul>
          </div>
          )}
          
      </div>
    </div>

  )
}

export default Navbar