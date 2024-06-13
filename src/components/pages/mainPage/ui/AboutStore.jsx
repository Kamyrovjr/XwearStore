import React from 'react';
import box from '@/assets/images/icons/box.svg'
import broker from '@/assets/images/icons/broker.svg'
import poizon from '@/assets/images/icons/Poizon.svg'

const AboutStore = () => {
    return (
        <div style={{backgroundColor: '#D9D9D9', width: '100%'}} className='px-72 py-32 mb-20'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col items-start text-wrap mr-32' style={{maxWidth: '600px'}}>
                    <h2 className='font-black text-4xl mb-4'>О ИНТЕРЕНТ МАГАЗИНЕ X-WEAR</h2>
                    <p className='text-base text-gray-400'>Команда XWEAR предоставляет услугу доставки только оригинальных товаров c крупнейшего 
                       китайского маркетплейса Poizon, чтобы наши клиенты экономили более 40% на каждой покупке. 
                       Работаем без посредников, благодаря чему можем предоставлять лучшую цену. Быстрая, бесплатная доставка. 
                       Сайт, на котором можно будет удобно оформить покупку, не скачивая китайское мобильное приложение Poizon, 
                       с удобной фильтрацией огромного количества товаров, а так же с возможностью сразу увидеть окончательную 
                       цену товара.
                    </p>
                </div>
                <div className='bg-white py-10 pr-10 pl-12' style={{minWidth: '415px', minHeight: '326px'}}>
                    <div className='flex flex-col items-start'>
                        <div className='flex items-start mb-10'>
                            <div>   
                                <img src={box} 
                                style={{minWidth: '51px', height: '51px', marginRight: '6.25px'}}
                                alt="" 
                                />
                            </div>
                            <div>
                                <h3 className='font-black text-sm'>БЕСПЛАТНАЯ ДОСТАВКА ПО <br />КАЗАХСТАНУ</h3>
                                <p className='text-sm text-gray-400'>Доставим вам заказ абсолютно бесплатно <br />до Казахстана</p>
                            </div>
                        </div>
                        <div className='flex items-start mb-10'>
                            <div>
                                <img src={broker} 
                                style={{minWidth: '51px', height: '51px', marginRight: '6.25px'}}
                                alt="" 
                                />
                            </div>
                            <div>
                                <h3 className='font-black text-sm'>МЫ РАБОТАЕМ БЕЗ <br />ПОСРЕДНИКОВ</h3>
                                <p className='text-sm text-gray-400'>Между нами и клиентом нет третьего <br />лишнего</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div>
                                <img src={poizon} 
                                style={{minWidth: '51px', height: '51px', marginRight: '6.25px'}}
                                alt="" 
                                />
                            </div>
                            <div>
                                <h3 className='font-black text-sm'>ПРОСТОТА В ЗАКАЗЕ И <br />ИСПОЛЬЗОВАНИИ</h3>
                                <p className='text-sm text-gray-400'>Для заказа с Poizon не нужно никаких <br />приложений</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutStore;
