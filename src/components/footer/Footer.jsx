
import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <div>
        <p className='heading'>Categories</p>
        <p>Web Builder</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>Robotic-Automation</p>
      </div>
      <div>
        <p className='heading'>Contact</p>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms Of Service</p>
        <p>Categories</p>
        <p>About</p>
      </div>
      <div>
        <p>
            United States
            <img src='./images/footer-show-more.svg' alt='' />
        </p>
      </div>
    </div>
  )
}

export default Footer
