import React from 'react'
import images from '../../assets/images.js'

import './Gallery.css'

const Gallery = () => {
  return (
    <div className='app__gallery app__section'>
        <div className='section-heading'>Gallery</div>
        <div className='app__gallery-images'>

          <div className='app__gallery-image_block'>
            <img src={images.candlelit_dinner_table} alt="candlelit-dinner" />
            <div className='app__gallery-image_description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</div>
          </div>

          <div className='app__gallery-image_block'>
            <div className='app__gallery-image_description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</div>
            <img src={images.candlelit_dinner_table_two} alt="candlelit-dinner-two" />
          </div>

          <div className='app__gallery-image_block'>
            <img src={images.burger} alt="burger" />
            <div className='app__gallery-image_description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</div>
          </div>

          <div className='app__gallery-image_block'>
            <div className='app__gallery-image_description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</div>
            <img src={images.lobster} alt="lobster" />
          </div>

          <div className='app__gallery-image_block'>
            <img src={images.drink_1} alt="drink1" />
            <div className='app__gallery-image_description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</div>
          </div>

          <div className='app__gallery-image_block'>
            <div className='app__gallery-image_description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</div>
            <img src={images.drink_2} alt="drink2" />
          </div>
        </div>

        

    </div>
  )
}

export default Gallery