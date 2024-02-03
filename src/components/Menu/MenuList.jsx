import React from 'react'
import constants  from '../../assets/constants.js';

const MenuList = (props) => {
    const menuList = [constants.breakfast, constants.appetizers, constants.lunchDinner, constants.desserts, constants.beverages];


    return (    
        <div>
        {menuList[props.listNum].map((item) => (
            <>
                <div>{item.name}</div>
                <div>{item.price}</div>
            </>
        ))}
        </div>
    )
}

export default MenuList