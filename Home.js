import React from 'react';
// import Batang from './바탕이.png';
import './Home.css';
import Free from './너무이쁘네.jpg';

function Home(){
    return (
        <div className="home">
            <img className="batang" src={Free} />
        </div>
    )
}

export default Home;