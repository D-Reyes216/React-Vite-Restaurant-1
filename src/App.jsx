import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Menu from './components/Menu/Menu.jsx';
import Contact from './components/Contact/Contact.jsx';
import BookingReserve from './components/BookingReserve/BookingReserve.jsx';
import Footer from './components/Footer/Footer.jsx'

import './App.css';
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Gallery />
      <Menu />
      <Contact />
      <BookingReserve />
      <Footer />
    </>
  )
}

export default App