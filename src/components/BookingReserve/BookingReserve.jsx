import React, { useState } from 'react'

import './BookingReserve.css'

//get values for min/max dates available to choose for booking
let today = new Date();
let d = today.getDate() + 1;
let m = today.getMonth() + 1;  
let yr = today.getFullYear();

if (d < 10) {
  d = '0' + d;
}

if (m < 10) {
  m = '0' + m;
} 

today = yr + '-' + m + '-' + d;

let maxyr = parseInt(yr) + 1;

let maxDate = maxyr + '-' + m + '-' + d;




const BookingReserve = () => {
  
  const [apptNum, setApptNum] = useState();

  const makeReservation = (e) => {
    e.preventDefault();
    document.querySelector('.app__bookingReserve-success').classList.add('active')
    document.querySelector('.reserve-button').setAttribute('disabled', 'true')
    setApptNum(Math.floor(Math.random() * 1001) + 20)
  
  }

  return (
    <div className='app__bookingReserve app__section'>
      <div className='section-heading'>Booking & Reservations</div>

      <div className='app__bookingReserve-body'>

          <form onSubmit={makeReservation} action='post' className='app__bookingReserve-reserve'>  
            Reserve a table:
            <div className='app__bookingReserve-div'>
              <label htmlFor='name'>Name: </label>
              <input className='rounded' type='text' id='name' placeholder='name' required/>
            </div>

            <div className='app__bookingReserve-div'>
              <label htmlFor='date'>Date: </label>
              <input type='date' id='date' min={today} max={maxDate}  required/>
            </div>

            <div className='app__bookingReserve-div'>
              <label htmlFor='time'>Time: </label>
              <input className='rounded' type='time' id='time' style={{'width':'6.5rem'}}/>
            </div>

            <div className='app__bookingReserve-div'>
              <label htmlFor='num-guests'>Number of Guests: </label>
              <input className='rounded' type='text' id='num-guests' placeholder='0' style={{'width':'4rem'}} required/>
            </div>

            <button className='rounded reserve-button' type='submit'>Make Reservation</button>
            
          </form> 

      </div>
      <div className='app__bookingReserve-success'>
        Appointment Successfully Booked!<br />
        Your Appointment Confirmation Number: {apptNum}
        <div id='appt-number'></div>
      </div>

    </div>
  )
}

export default BookingReserve