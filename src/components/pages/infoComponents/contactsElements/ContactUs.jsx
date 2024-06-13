import React from 'react';
import Telegram from './buttons/Telegram';
import Whatsapp from './buttons/Whatsapp';
import call from '@/assets/images/icons/call.png'
import email from '@/assets/images/icons/email.png'
import calendar from '@/assets/images/icons/calendar.png'
import internet from '@/assets/images/icons/internet.png'
import telegram from '@/assets/images/icons/telegram.svg'
import whatsapp from '@/assets/images/icons/whatsapp.svg'
import vk from '@/assets/images/icons/vk.svg'


const ContactUs = () => {
    return (
        <div className='flex flex-col items-start justify-start'>
            <h2 className='font-semibold text-xl mb-10'>СВЯЗАТЬ С НАМИ</h2>
            <p className='text-sm text-gray-300 mb-10'>Вы можете связаться с нами любым удобным для вас способом:</p>
            <div className='flex items-start justify-start mb-5'>
                <div className='flex items-start justify-start mr-16 cursor-pointer'>
                    <div className='mr-2'>
                        <img src={call} alt="" />
                    </div>
                    <div className='flex flex-col items-start justify-start'>
                        <p className='text-sm font-semibold'>Телефон:</p>
                        <p className='text-sm font-medium'>+7 708 767 21 63</p>
                    </div>
                </div>
                <div className='flex items-start justify-start mr-16 cursor-pointer'>
                    <div className='mr-2'>
                        <img src={email} alt="" />
                    </div>
                    <div className='flex flex-col items-start justify-start'>
                        <p className='text-sm font-semibold'>Email:</p>
                        <p className='text-sm font-medium'>info@xwear.info</p>
                    </div>
                </div>
            </div>
            <div className='flex items-start justify-start mb-10'>
                <div className='flex items-start justify-start mr-12 cursor-pointer'>
                    <div className='mr-2'>
                        <img src={calendar} alt="" />
                    </div>
                    <div className='flex flex-col items-start justify-start'>
                        <p className='text-sm font-semibold'>График работы:</p>
                        <p className='text-xs'>Пн-Пт с 9:00 - 18:00</p>
                        <p className='text-xs'>Сб-Вс выходные</p>
                    </div>
                </div>
                <div className='flex items-start justify-start mr-16 cursor-pointer'>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-start'>
                            <div className='mr-2'>
                                <img src={internet} alt="" />
                            </div>
                            <p className='text-sm font-semibold'>Наши соц сети:</p>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                            <div className='flex items-start mb-2'>
                                <div>
                                    <img src={telegram} 
                                    className='w-30 h-30 mr-2'
                                    alt="telegram" 
                                    />
                                </div>
                                <div>
                                    <img src={whatsapp} 
                                    className='w-30 h-30 mr-2'
                                    alt="whatsapp"
                                    />
                                </div>
                                <div>
                                    <img 
                                    src={vk}
                                    className='w-30 h-30' 
                                    alt="" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center w-full'>
                <Telegram />
                <Whatsapp />
            </div>
        </div>
    );
}

export default ContactUs;
