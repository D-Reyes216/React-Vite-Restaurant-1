import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';

import './Navbar.css'
const Navbar = () => {
  return (
    <div class="app__navbar">
      <img class="app__navbar-logo" src="src/assets/cc_logo.png" alt="cc-logo" />
      <img class="app__navbar-title" src="src/assets/cc-title.png" alt="cc-title" />
      <ul class="app__navbar-links">
        <li>Home</li>
        <li>Menu</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      <div class="app__navbar-dropdown">
        <GiHamburgerMenu onClick={() =>{}}/>
      </div>
    </div>

  )
}

export default Navbar