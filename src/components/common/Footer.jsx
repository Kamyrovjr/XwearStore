import React from 'react';
import { Link } from 'react-router-dom';
import vk from '../../assets/images/icons/vk.svg'
import telegram from '../../assets/images/icons/telegram.svg'
import whatsapp from '../../assets/images/icons/whatsapp.svg'
import logoGray from '../../assets/images/logo/logoGray.png'
import readyCode from '../../assets/images/logo/readyCode.png'
import rightArrow from '../../assets/images/icons/rightArrow.png'
import { ROUTES } from '../../utils/Routes';

const Footer = () => {
    return (
        <div className='bg-black flex items-start justify-center py-12 px-64'>
            <div className='flex flex-col items-start justify-start' style={{marginRight: '212px'}}>
                <h2 className='text-15 font-black mb-2 text-white'>КАТАЛОГ</h2>
                <Link to={ROUTES.CATALOGCLOTHES}>
                    <p className='text-15 text-white mb-2'>Одежда</p>
                </Link>
                <Link to={ROUTES.CATALOGSHOES}>
                    <p className='text-15 text-white mb-2'>Обувь</p>
                </Link>
                <Link to={ROUTES.CATALOGACCESSORIES}>
                    <p className='text-15 text-white'>Аксессуары</p>
                </Link>
                <div>
                    <img 
                    src={logoGray}
                    className='w-24 h-10' 
                    alt="" 
                    />
                </div>
            </div>
            <div className='flex flex-col items-start justify-start' style={{marginRight: '212px'}}>
                <h2 className='text-15 font-black mb-2 text-white'>ИНФОРМАЦИЯ</h2>
                <p className='text-15 text-white mb-2'>Блог</p>
                <Link to={ROUTES.CONTACTS}>
                    <p className='text-15 text-white mb-2'>Контакты</p>
                </Link>
                <p className='text-15 text-white mb-2'>Доставка</p>
                <p className='text-15 text-white mb-2'>Оплата</p>
                <p className='text-15 text-white' style={{marginBottom: '38px'}}>FAQ</p>
                <div>
                    <img 
                    src={readyCode} 
                    className='w-36 h-6'
                    alt="" 
                    />
                </div>
            </div>
            <div className='flex flex-col items-start justify-start' style={{marginRight: '212px'}}>
                <h2 className='text-15 font-black mb-2 text-white'>КОНТАКТЫ</h2>
                <a className='text-15 text-white mb-2' href="info@xwear.info">info@xwear.info</a>
                <p className='text-16 text-white mb-2'>+ 7 993 608 38 85</p>
                <h2 className='text-15 font-black mb-2 text-white'>МЕССЕНДЖЕРЫ</h2>
                <div className='flex items-start mb-2'>
                    <div>
                        <img src={telegram} 
                        className='w-30 h-30 mr-2'
                        alt="telegram" 
                        />
                    </div>
                    <div>
                        <img src={whatsapp} 
                        className='w-30 h-30'
                        alt="whatsapp"
                         />
                    </div>
                </div>
                    <h2 className='text-15 font-black mb-2 text-white text-nowrap'>НАШИ СОЦ.СЕТИ</h2>
                 <div>
                    <img 
                    src={vk}
                    className='w-30 h-30' 
                    alt="" 
                    />
                </div>
            </div>
            <div className='flex flex-col items-start' style={{maxWidth: '274px'}}> 
                <h2 className='text-15 font-black mb-2 text-white text-nowrap'>ПОДПИСКА НА НОВОСТИ </h2>
                <p className='text-15 text-white mb-2 text-nowrap'>Будьте в курсе скидок и новостей</p>
                <div className='relative' style={{marginBottom: '15px'}}>
                    <input type="text" 
                    placeholder="Ваш email"
                    className='w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none bg-black text-white'
                    />
                    <div className='absolute top-1/2 right-1 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center'>
                        <img src={rightArrow}
                        alt=""
                        className='w-3 h-3'
                        />
                    </div>
                </div>
                <p className='text-xs text-gray-400' style={{marginBottom: '51px'}}>Подписываясь на рассылку вы соглашатесь с обработкой персональных данных</p>
                <p className='text-gray-600 text-xs'>Политика конфиденциальности</p>
                <p className='text-gray-600 text-xs'>Пользовательское соглашение</p>
            </div>
        </div>
    );
}

export default Footer;
