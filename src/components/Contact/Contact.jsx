import React from 'react'

import './Contact.css'
const Contact = () => {
  return (
    <div className='app__contact app__section'>
        <div className='section-heading'>Contact</div>

        <div className='app__contact-info'>

          <div>
            Call us at: <br/><br/>
            (123)-456-7890 
          </div>   

          <div className='app__contact-hours'>
            Hours Open:
            <li>
              <ul>Sun-Thurs: 7:30 AM - 9:30 PM</ul>
              <ul>Fri-Sat: 7:30 AM - 11:00 PM</ul>
            </li>
          </div>
          
        </div>
       
    </div>
  )
}

export default Contact