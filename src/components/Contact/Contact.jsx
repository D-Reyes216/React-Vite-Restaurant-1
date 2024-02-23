import React from 'react'

import './Contact.css'
const Contact = () => {
  return (
    <div className='app__contact app__section'>
        <div className='section-heading'>Contact</div>

        <div className='app__contact-info'>

          <div>
            <div>Call us at:</div>
            <ul>(123)-456-7890</ul> 
            <div>E-mail us at: </div>
            <ul>culinarycollection@cc.com</ul>
          </div>   

          <div className='app__contact-hours'>
            <div>Hours Open:</div>
              <ul>Sun-Thurs: 7:30 AM - 9:30 PM</ul>
              <ul>Fri-Sat: 7:30 AM - 11:00 PM</ul>
          </div>
          <div>
            <div>Location: </div>
            <ul>1234 Avenue Lane</ul>
          </div>
        </div>
       
    </div>
  )
}

export default Contact