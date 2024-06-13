import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { AppRoutes } from './components/routes/routes';

export const App = () => {
    return (
        <div className='flex flex-col items-center w-full' style={{padding: '0 280px'}}>
            <Header />
            <div className='flex flex-col items-center justify-center w-full'>
                <AppRoutes />  
            </div>
            <Footer />
        </div>  
    );
}
