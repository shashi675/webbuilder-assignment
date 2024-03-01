import React from 'react';
import './card.scss';
import LeftCard from './leftCard/LeftCard';
import RightCard from './rightCard/RightCard';
import MiddleCard from './middleCard/MiddleCard';

function Card({value}) {
  const {leftSection, middleSection, rightSection} = value;
  return (
    <div className='card'>
       <span className='number'>
         <span className='text'>{value.number}</span>
       </span>
      {(value.tag === true) ?
      (<div className='top-left'>
        <img src={value.src} alt='prize' />
        <span>{value.tagName}</span>
      </div>)
       : ""}
      <LeftCard leftSection = {leftSection} />
      <MiddleCard middleSection = {middleSection} />
      <RightCard rightSection = {rightSection} />
    </div>
  )
}

export default Card
