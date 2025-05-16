import React from 'react';

import HeroBanner from '../../layout/Hero/HeroBanner';
import Offer from '../../layout/Offer/Offer';
import Featured from './Featured/Featured';
import Services from '../../layout/ServicesWithSignup/Services/Services';
import Subscribe from '../../layout/ServicesWithSignup/Subscribe/Subscribe';



import './Home.css';



function Home() {

    return (
        
            <div className='center'>

                <HeroBanner />
                <Offer />
                <Featured />
                <Services />
                <Subscribe />

            </div>
    );
}

export default Home;