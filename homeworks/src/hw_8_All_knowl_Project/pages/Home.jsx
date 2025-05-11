import React from 'react';
import Header from '../layout/Header/Header';
import HeroBanner from '../layout/Hero/HeroBanner';
import Offer from '../layout/Offer/Offer';
import Featured from '../layout/Featured/Featured';
import Services from'../layout/ServicesWithSignup/Services/Services';
import Subscribe from'../layout/ServicesWithSignup/Subscribe/Subscribe';
import Footer from '../layout/Footer/Footer';
import './Home/Home.css';



function Home() {
    return (
        <div className='center'>
            <Header />
            <HeroBanner />
            <Offer />
            <Featured />
            <Services />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default Home;