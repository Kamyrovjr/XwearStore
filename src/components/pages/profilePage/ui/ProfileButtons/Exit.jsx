import React from 'react';
import exit from '@/assets/images/icons/Exit.png'

const Exit = ({ logout }) => {
    return (
        <div className='flex items-center mb-5 cursor-pointer' onClick={logout} >
            <div className='mr-5'>
                <img src={exit}
                className='w-5 h-5'
                alt="" 
                />
            </div>
            <p className='text-sm font-medium'>Выход</p>
    </div>
    );
}

export default Exit;
