
import React from 'react';
import './header.scss';
import Hr from '../horizontalLine/Hr'

function Header() {
  return (
    <div className='header'>
        <h1>Best Website builders in the US</h1>
        <Hr />
        <div>
            <div>
                <img src='./images/header-tick.svg' alt='tick' />
                <span>Last Updated - February 22, 2020</span>
                <img src='./images/i.svg' alt='i-button' />
                <span>Advertising Disclosure</span>
            </div>
            <div>
                <span>Top Relevant</span>
                <img src='./images/more-info.svg' alt='more-info' />
            </div>
        </div>
        <Hr />
    </div>
  )
}

export default Header
