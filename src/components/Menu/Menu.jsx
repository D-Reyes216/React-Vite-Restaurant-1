import React from 'react'
import MenuList from './MenuList'
import './Menu.css'

const Menu = () => {
  let listNum = 2;
  return (
    <div className="app__menu">
        <ul className="app__menu-categories">
            <li id='menu-1' onClick={() => {listNum = 0; console.log(listNum);}}>Breakfast</li>
            <li id='menu-2' onClick={() => {listNum = 1; console.log(listNum);}}>Appetizers</li>
            <li id='menu-3'>Lunch & Dinner</li>
            <li id='menu-4'>Desserts</li>
            <li id='menu-5'>Beverages</li>
        </ul>
        
        <div className="app__menu-list">
            <MenuList listNum = {listNum} />
        </div>
    </div>
  )
}

export default Menu