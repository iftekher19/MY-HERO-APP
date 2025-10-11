import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
                <Outlet />
            </div>
            <Footer />

        </div>
    );
};

export default MainLayouts;