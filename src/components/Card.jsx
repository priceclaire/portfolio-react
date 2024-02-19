import React from 'react';
import headshot from '../assets/images/01-claire-price.jpg';

function Card() {
    return (
        <>
        <h1>
            about.
        </h1>
        <img className="headshot" src={headshot} alt="Headshot of me" />
        <p>
            I am a paragraph about me.
        </p>
        </>
    )
}

export default Card;