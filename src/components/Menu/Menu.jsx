import React, { Component } from 'react'
import constants  from '../../assets/constants.js';

import './Menu.css'

const menuList = [constants.breakfast, constants.appetizers, constants.lunchDinner, constants.desserts, constants.beverages];


class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {currList: menuList[0]}
  }

  updateMenu(e) {
    this.setState ({
      currList: menuList[e] 
    })
  }
  
  render () {
    return (
      <div className="app__menu">
          <ul className="app__menu-categories">
              <li id='menu-1' onClick={() => { this.updateMenu(0);} }>Breakfast</li>
              <li id='menu-2' onClick={() => { this.updateMenu(1);} }>Appetizers</li>
              <li id='menu-3' onClick={() => { this.updateMenu(2);} }>Lunch & Dinner</li>
              <li id='menu-4' onClick={() => { this.updateMenu(3);} }>Desserts</li>
              <li id='menu-5' onClick={() => { this.updateMenu(4);} }>Beverages</li>
          </ul>
          
      <div>
        {this.state.currList.map((item, index) => {
          return(
            <div key={index} className="menuItem">
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          )
        })}
      </div>
      
      </div>
      
    )
  }
}

export default Menu