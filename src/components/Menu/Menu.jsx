import React, { Component } from 'react'
import constants  from '../../assets/constants.js';

import './Menu.css'

// array of menu categories, each with different kinds of food
const menuList = [constants.breakfast, constants.appetizers, constants.lunchDinner, constants.desserts, constants.beverages];

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currList: menuList[0], 
      currCat: 0
    }
  }

  // updates which menu category is displayed
  updateMenu(e) {
    this.setState ({
      currList: menuList[e],
      currCat: e
    })
  }


  render () {
    return (
      <div className='app__menu app__section'>
        <div className='section-heading'>Menu</div>
        <ul className='app__menu-categories'>
          {/* different menu categories that updates the list of menu items displayed when clicked */}
            <li className={ this.state.currCat == 0 ? 'active' : '' } onClick={() => { this.updateMenu(0);} }>Breakfast</li>
            <li className={ this.state.currCat == 1 ? 'active' : '' } onClick={() => { this.updateMenu(1);} }>Appetizers</li>
            <li className={ this.state.currCat == 2 ? 'active' : '' } onClick={() => { this.updateMenu(2);} }>Lunch & Dinner</li>
            <li className={ this.state.currCat == 3 ? 'active' : '' } onClick={() => { this.updateMenu(3);} }>Desserts</li>
            <li className={ this.state.currCat == 4 ? 'active' : '' } onClick={() => { this.updateMenu(4);} }>Beverages</li>
        </ul>
          
        <div>
          {/* maps through array of menu items to display each item from a specific menu category */}
          {this.state.currList.map((item, index) => {
            return(
              <div key={index} className='app__menu-item'>
                <div>{(index + 1)  + '. ' + item.name}</div>
                <div>${item.price}</div>
              </div>
            )
          })}
        </div>
      
      </div>
      
    )
  }
}

export default Menu