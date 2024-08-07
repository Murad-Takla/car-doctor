import React from 'react';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
          <Header></Header>
          <div className='	container mx-auto'>
          <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Main;