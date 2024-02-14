import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx'

import './App.css';
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Gallery />
      <Menu />
      <Footer />
    </>
  )
}

export default App