import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shares/navbar/Navbar';
import Footer from '../components/shares/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;