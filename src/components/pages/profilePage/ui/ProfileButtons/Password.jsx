import React from 'react';
import password from '@/assets/images/icons/Password.png'

const Password = ({ active, click }) => {
    return (
        <div className='flex items-center mb-5 cursor-pointer' onClick={click}>
            <div className='mr-5'>
                <img src={password} 
                className='w-5 h-5'
                alt="" 
                />
            </div>
            <p className={`text-sm font-medium ${active ? 'font-semibold' : ''}`}>Пароль</p>
    </div>
    );
}

export default Password;
