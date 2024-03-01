
import React from 'react';
import './youMayLike.scss';
import LikeCard from './likeCard/LikeCard';

function YouMayLike() {
  return (
    <div className='youMayLike'>
      <p>Related deals you might like for</p>
      <div className='cards'>
        <LikeCard />
        <LikeCard />
        <LikeCard />
      </div>
    </div>
  )
}

export default YouMayLike
