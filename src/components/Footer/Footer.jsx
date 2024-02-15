import React from 'react';
import './Footer.css'

const scroll = (e) => {
    window.scrollTo({
    top: document.querySelector(e).offsetTop,
    behavior: "smooth",
  })}

const Footer = () => {
    return (
        <div className='app__footer app__section'>
            <ul className='app__footer-links'>
                <li onClick={(e) => {e.preventDefault(); scroll('.app__navbar')}} >Home</li>
                <li onClick={(e) => {e.preventDefault(); scroll('.app__menu')}}>Menu</li>
                <li onClick={(e) => {e.preventDefault(); scroll('.app__gallery')}}>Gallery</li>
                <li onClick={(e) => {e.preventDefault(); scroll('.app__contact')}}>Contact</li>
                <li onClick={(e) => {e.preventDefault(); scroll('.app__bookingReserve')}}>Booking & Reservations</li>
                    
                
            </ul>
            
            <div className='app__footer-to_top' onClick={(e) => {e.preventDefault(); scroll('.app__navbar')}}>Back To Top</div>
        </div>
    )
}

export default Footer