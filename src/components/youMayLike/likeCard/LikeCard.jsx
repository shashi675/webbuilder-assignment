
import React from 'react';
import './likeCard.scss';

function LikeCard() {
  return (
    <div className='likeCard'>
        <img src='./images/download7.svg' alt='' />
        <div className='off'>
            <span>20% Off</span>
            <span>Limited time </span>
        </div>
        <div className='bold'>Webbuilder 1</div>
        <p>Computer  Modern clasic with wix support</p>
        <div>
            <span className='largest'>$39.96</span>
            <span className='larger'>$49.96</span>
            <span className='small'>(20% Off)</span>
        </div>
        <button>View Deal</button>
    </div>
  )
}

export default LikeCard
