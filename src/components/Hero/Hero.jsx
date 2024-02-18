import React from 'react';
import hero from '../../assets/images/hero.png';
import './Hero.css';

function Hero() {
    return (
        <div className='hero'>
            <img src={hero} alt='Black and white abstract image' />
            <h1>Claire Price</h1>
        </div>
    )
}

export default Hero;