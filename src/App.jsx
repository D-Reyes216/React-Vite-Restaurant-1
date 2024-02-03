import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer/Footer.jsx'

import './App.css';
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Menu />
      <Footer />
    </>
  )
}

export default App