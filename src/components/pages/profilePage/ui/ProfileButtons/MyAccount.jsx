import React from 'react';
import myAccount from '@/assets/images/icons/myAccount.png'

const MyAccount = ({ active, click }) => {
    return (
        <div className='flex items-center mb-5 cursor-pointer' onClick={click}>
            <div className='mr-5'>
                <img src={myAccount} 
                className='w-5 h-5'
                alt="" 
                />
            </div>
            <p className={`text-sm font-medium ${active ? 'font-semibold' : ''}`}>Мой аккаунт</p>
        </div>
    );
}

export default MyAccount;
