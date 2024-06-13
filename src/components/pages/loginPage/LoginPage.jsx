import React, { useState } from 'react';
import Login from './ui/Login';
import Registration from './ui/Registration';

const LoginPage = () => {
    const [isActive, setIsActive] = useState(true);

    const handleLoginClick = () => {
        setIsActive(true);
    };

    const handleRegistrationClick = () => {
        setIsActive(false);
    };

    return (
        <div className='flex flex-col items-center justify-center mb-28'>
            <div className='mb-11'>
                <h2 className='font-black text-3xl'>АККАУНТ</h2>
            </div>
            <div className='border-solid border border-inherit rounded-md flex flex-col items-center' style={{padding: '34px 40px 78px 40px', minWidth: '665px'}}>
                <div className='flex items-center mb-6'>
                    <h2 className={`font-bold text-xl cursor-pointer ${isActive ? 'text-green-400' : ''}`} onClick={handleLoginClick}>ВХОД</h2>
                    /
                    <h2 className={`font-bold text-xl cursor-pointer ${!isActive ? 'text-green-400' : ''}`} onClick={handleRegistrationClick}>РЕГИСТРАЦИЯ</h2>
                </div>
                {isActive ? <Login/> : <Registration/>}
            </div> 
        </div>
    );
}

export default LoginPage;