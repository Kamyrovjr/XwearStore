import React from 'react';
import blueCircle from '@/assets/images/icons/blueCircle.png'
import favoriteStar from '@/assets/images/icons/favoriteStar.png'
import bascetUp from '@/assets/images/icons/bascetUp.png'
import bascetDown from '@/assets/images/icons/bascetDown.png'

const FavoriteEmpty = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full mb-36'>
        <div className='mb-36 relative' style={{minWidth: '84px'}}>
            <img src={favoriteStar}
            className='absolute z-10 -right-1 -top-3'
            style={{minWidth: '102px', height: '96px'}}
            alt="" 
            />
            <img src={bascetUp}
            className='absolute z-20 left-10 top-8'
            style={{minwidth: '14px', height: '4px'}}
            alt="" 
            />
            <img src={bascetUp}
            className='absolute z-20 left-4 top-8'
            style={{minwidth: '14px', height: '4px'}}
            alt="" 
            />
             <img src={bascetDown}
            className='absolute z-10 left-7 top-12'
            style={{minwidth: '19px', height: '4px'}}
            alt="" 
            />
            <img src={blueCircle}
            className='absolute z-0' 
            style={{minwidth: '74px', height: '74px'}}
            alt="" 
            />
        </div>
        <div className='text-center mb-5'>
            <h2 className='font-extrabold text-xl'>ЭТОТ СПИСОК ЖЕЛАНИЙ ПУСТ</h2>   
        </div>
        <div className='text-center' style={{maxWidth: '400px'}}>
            <p className='text-sm text-gray-500'>У вас пока нет товаров в списке желаний</p>
        </div>
    </div>
    );
}

export default FavoriteEmpty;
