import React from 'react';
import whatsapp from '@/assets/images/icons/whatsapp.svg'

const Whatsapp = () => {
    return (
        <div className='flex items-center justify-center border rounded border-green-200 w-full cursor-pointer' style={{padding: '10px 20px 10px 20px'}}>
            <div>
                <img src={whatsapp} 
                className='w-30 h-30 mr-2'
                alt="whatsapp"
                />
            </div>
            <p className='font-extrabold text-xs text-nowrap'>НАПИСАТЬ В WHATSAPP</p>
        </div>
    );
}

export default Whatsapp;
