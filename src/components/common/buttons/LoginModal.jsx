import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/Routes';

const LoginModal = () => {
    return (
        <div class="flex flex-col items-start justify-start bg-white shadow-md rounded-lg absolute -left-10 top-12 fixed z-50" style={{padding: '20px 20px', minWidth: '360px', minHeight: '180px'}}>
           <Link to={ROUTES.LOGINPAGE} className='w-full'>
                <button className='bg-black text-white text-lg font-black mb-4 rounded-lg border-solid border border-black w-full hover:bg-white hover:text-black' style={{padding: '10px 20px'}}>
                    ВОЙТИ
                </button>
           </Link> 
           <div className='flex items-start justify-start'>
                <p className='text-sm mr-2.5'>Нет аккаунта?</p>
                <Link to={ROUTES.LOGINPAGE}>
                    <p className='text-green-500 text-sm cursor-pointer hover:text-green-700'>Зарегистрируйся</p>
                </Link>
           </div>
        </div>
    );
}

export default LoginModal;
