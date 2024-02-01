import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div class="app__header">
      <img class="app__header-logo" src="src/assets/cc_logo.png" alt="cc-logo" />
      <img src="src/assets/cc-title.png" alt="cc-title" />

      <div class="app__header-slogan"> Whatever your mood, we've got the food.</div>

      <div class="app__header-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
  )
}

export default Header