import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';

const MainLayouts = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
                {isLoading ? <Loader /> : <Outlet />}
            </div>
            <Footer />

        </div>
    );
};

export default MainLayouts;