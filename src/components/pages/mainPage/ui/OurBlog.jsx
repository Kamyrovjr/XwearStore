import React from 'react';
import rightArroy from "@/assets/images/icons/rightArrow.png"
import sale from "@/assets/images/blog/sale.png"
import jeans from "@/assets/images/blog/jeans.png"
import xwear from "@/assets/images/blog/xwear.png"

const OurBlog = () => {
    return (
        <div style={{maxWidth: '1541px'}}>
            <div className='flex items-center justify-between mb-8'>
                <h2 className='font-black' style={{fontSize: '31px'}}>НАШ БЛОК</h2>
                <div className='flex items-center underline decoration-2'>
                    <p className='font-black text-8 mr-2.5'>БОЛЬШЕ СТАТЕЙ</p>
                    <img src={rightArroy} 
                    className='w-3 h-3'
                    alt="" 
                    />
                </div>
            </div>
            <div className='flex items-start'>
                <div className='flex flex-col items-start' style={{maxWidth: '433px', marginRight: '31px'}}>
                    <div className='w-full'>
                        <img src={sale} 
                        style={{maxWidth: '433px'}}
                        alt="" 
                        />
                    </div>
                    <p className='font-bold' style={{marginBottom: '13px', fontSize: '23px'}}>Делаем скидки на женскую одежду осеннего сезона</p>
                    <p style={{fontSize: "15px", marginBottom: '13px'}}>Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.</p>
                    <div className='flex items-center justify-between w-full'>
                        <p className='font-extrabold text-sm'>УЗНАТЬ ПОДРОБНЕЕ</p>
                        <p className='text-xs text-gray-400'>15 АПРЕЛЯ 2024</p>
                    </div>
                </div>
                <div className='flex flex-col items-start' style={{maxWidth: '433px', marginRight: '31px'}}>
                    <div className='w-full'>
                        <img src={jeans} 
                        style={{maxWidth: '433px'}}
                        alt="" 
                        />
                    </div>
                    <p className='font-bold' style={{marginBottom: '13px', fontSize: '23px'}}>Джинсы для всех друзей. Скидки на большие покупки</p>
                    <p style={{fontSize: "15px", marginBottom: '13px'}}>Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.</p>
                    <div className='flex items-center justify-between w-full'>
                        <p className='font-extrabold text-sm'>УЗНАТЬ ПОДРОБНЕЕ</p>
                        <p className='text-xs text-gray-400'>15 АПРЕЛЯ 2024</p>
                    </div>
                </div>
                <div className='flex flex-col items-start' style={{maxWidth: '433px'}}>
                    <div className='w-full'>
                        <img src={xwear} 
                        style={{maxWidth: '433px'}}
                        alt="" 
                        />
                    </div>
                    <p className='font-bold' style={{marginBottom: '13px', fontSize: '23px'}}>Джинсы для всех друзей. Скидки на большие покупки</p>
                    <p style={{fontSize: "15px", marginBottom: '13px'}}>Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.</p>
                    <div className='flex items-center justify-between w-full'>
                        <p className='font-extrabold text-sm'>УЗНАТЬ ПОДРОБНЕЕ</p>
                        <p className='text-xs text-gray-400'>15 АПРЕЛЯ 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurBlog;
