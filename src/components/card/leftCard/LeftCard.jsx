import React from 'react';
import './leftCard.scss';

function LeftCard({leftSection}) {
  return (
    <div className='leftCard'>
        <img src={leftSection.srcLeft} alt='rectangle' />   
        <span>{leftSection.leftText}</span>  
    </div>
  )
}

export default LeftCard
