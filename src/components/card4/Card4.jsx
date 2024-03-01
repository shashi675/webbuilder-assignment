
import React from 'react';
import LeftCard from '../card/leftCard/LeftCard';
import RightCard from '../card/rightCard/RightCard';
import './card4.scss';

function Card4() {
    const leftSection ={
        srcLeft: "./images/download2.svg",
        leftText: "CDK",
    };
    
    const middleSection = {
        upperHeading: "CDK Resposive Builder:",
        content1: " An extensive library of widgets and apps, and detailed step-by-step guides",
        off: "26% Off",
    };

    const rightSection = {
        rating: 9.1,
        text: "Very Good",
        imgRating: "./images/4-star.svg",
    };

  return (
    <div className='card card4'>
       <span className='number'>
         <span className='text'>4</span>
       </span>
      <LeftCard leftSection = {leftSection} />

      <div className='middleCard'>
        <div>
            <p className='heading'>{middleSection.upperHeading}</p>
            <p>{middleSection.content1}</p>
        </div>
        <div className='off'>26% Off</div>
        <div>
            <p className='mainHighilights'>Main highlights</p>
            <div className='pd-20 card4'>
                <div><span className='num'>8.9</span><span>building responsive</span></div>
                <div><span className='num'>8.9</span><span>Cool</span></div>
                <div><span className='num'>8.9</span><span>Docs</span></div>
            </div>
        </div>
        <div className='blue-tick'>
            <p>Why we love it</p>
            <div>
                <img src='./images/blue-tick.svg' alt='' />
                <span>building responsive</span>
            </div>
            <div>
                <img src='./images/blue-tick.svg' alt='' />
                <span>Cool</span>
            </div>
            <div>
                <img src='./images/blue-tick.svg' alt='' />
                <span>Docs</span>
            </div>
        </div>
        <div className='show-more'>
            <span>Show more</span>
            <img src='./images/show-more.svg' alt='show-more' />
        </div>
      </div>

      <RightCard rightSection = {rightSection} />
    </div>
  )
}

export default Card4
