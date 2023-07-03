import React from 'react';
import aboutImage from './assets/image54.png';

const About = () => {
    return (
        <div className="about-element page-size">
            <img className='about-image' src={aboutImage} alt="" />
            <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
            <p>(Hitch costs extra 😉)</p>
            <br />
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className='bottom-box'>
                <h2>Your destination is waiting.</h2>
                <h2>Your van is ready.</h2>
                <button>Explore our vans</button>
            </div>
        </div>
    )
}

export default About;
