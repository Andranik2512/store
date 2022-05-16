import React, { FC } from 'react';
import {Link} from "react-router-dom";

import './Navbar.css';

export type TNavbarPropos = {
  click?: any
}

const Navbar: FC<TNavbarPropos> = ({click}) => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
      <Link to="/" >           
            <h2 >
        APPLE SHOP
            </h2>
          </Link>
        {/* <h2 >Zappos</h2> */}
      </div>

      <ul className='navbar__links'>
        <li>
          <Link to="/cart" className='cart__link'>
            <i className='fas fa-shoping-cart'></i>
            <span>
                Cart
            {/* <span className='cartlogo__badge'>0</span> */}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>

      <div className='hamburger__menu' onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar;;
