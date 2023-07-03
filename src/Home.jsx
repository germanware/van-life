import React from 'react';
import background from './assets/image53.png';

const Home = () => {
    return (
        <div
            className="home-element page-size"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="info">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className='callActionBtn'>Find your van</button>
            </div>
        </div>
    )
}

export default Home;
