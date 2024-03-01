import React from 'react';
import './rightCard.scss';

function RightCard({rightSection}) {
  return (
    <div className='rightCard'>
      <div>
        <p className='large'>{rightSection.rating}</p>
        <p className='title'>{rightSection.text}</p>
        <img src={rightSection.imgRating} alt='rating' />
      </div>
      <button>View</button>
    </div>
  )
}

export default RightCard
