import React, { useEffect } from 'react';
import './Nav.css'
function Nav() {
    return (
        <div className="nav">
    <img src="logo.png" alt="shop logo"/>
    <select className="nav__select">
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men clothing">Clothing(Men)</option>
        <option value="women clothing">Clothing(Women)</option>
    </select>
    <form >
        <label htmlFor="from">From:</label>
        <input id='from' type="number"/>
        <label htmlFor="to">to</label>
        <input id='to' type='number'/>
    </form>
        </div>
    )
}

export default Nav
