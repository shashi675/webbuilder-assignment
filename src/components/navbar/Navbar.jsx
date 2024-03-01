
import React from 'react';
import './navbar.scss';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='search'>
          <img src='./images/search.svg' alt='search' />
          <input type='text' />
        </div>
        <div className='nav-items'>
          <span>Categories</span>
          <span>Website Builders</span>
          <span>Today's deals</span>
          <img src='./images/menu-outline.svg' alt='' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
