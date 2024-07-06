import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Services from '../Services/Services';

const Home = () => {

    return (
        <div>
           <div className='px-4'>
           <Banner></Banner>
           </div>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;