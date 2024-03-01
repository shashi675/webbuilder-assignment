
import React from 'react';
import './middleCard.scss';

function MiddleCard({middleSection}) {
  return (
    <div className='middleCard'>
      <div>
        <p className='heading'>{middleSection.upperHeading}</p>
        <p>{middleSection.content1}</p>
      </div>
      <div>
        <p className='mainHighilights'>Main highlights</p>
        <div className='pd-20'>
        <p>{middleSection.mainHighlights}</p>
        </div>
      </div>
      <div className='show-more'>
        <span>Show more</span>
        <img src='./images/show-more.svg' alt='show-more' />
      </div>
    </div>
  )
}

export default MiddleCard
