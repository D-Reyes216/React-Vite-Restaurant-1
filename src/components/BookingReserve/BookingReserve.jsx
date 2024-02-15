import React from 'react'

import './BookingReserve.css'

const BookingReserve = () => {
  return (
    <div className='app__bookingReserve app__section'>
        <div className='section-heading'>Booking & Reservations</div>
           
        <li className='app__bookingReserve-reserve'>
          <ul>Reserve a table:</ul>
          <ul >
            <label htmlFor="name">Name: </label>
            <input className='rounded' type="text" id="name" placeholder='name' />
          </ul>

          <ul>
            <label htmlFor="day">Day: </label>
            <input className='rounded' type="text" id="day" placeholder='day' />
          </ul>

          <ul>
            <label htmlFor="time">Time: </label>
            <input className='rounded' type="text" id="time" placeholder='time' />
          </ul>

          <ul>
            <button className='rounded reserve-button' type='submit'>Make Reservation</button>
          </ul>
        </li>        


    </div>
  )
}

export default BookingReserve