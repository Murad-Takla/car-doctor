import React, { useContext } from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Services from '../Services/Services';
import { AuthContext } from '../../Context/MyContext';

const Home = () => {
const {user} = useContext(AuthContext)
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