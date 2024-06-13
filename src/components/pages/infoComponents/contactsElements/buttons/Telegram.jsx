import React from 'react';
import telegram from '@/assets/images/icons/telegram.svg'

const Telegram = () => {
    return (
        <div className='flex items-center justify-center border rounded border-blue-200 mr-8 w-full cursor-pointer' style={{padding: '10px 20px 10px 20px'}}>
            <div>
                <img src={telegram} 
                className='w-30 h-30 mr-2'
                alt="whatsapp"
                />
            </div>
            <p className='font-extrabold text-xs text-nowrap'>НАПИСАТЬ В TELEGRAM</p>
    </div>
    );
}

export default Telegram;
