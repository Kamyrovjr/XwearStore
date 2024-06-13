import React from 'react';
import emptyCart from '@/assets/images/icons/emptyCart.png'
import blueCircle from '@/assets/images/icons/blueCircle.png'


const CartEmpty = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full mb-36'>
            <div className='mb-36 relative' style={{minWidth: '84px'}}>
                <img src={emptyCart}
                className='absolute z-10 right-1 -top-3'
                style={{minwidth: '84px', height: '98px'}}
                alt="" 
                />
                <img src={blueCircle}
                className='absolute z-0' 
                style={{minwidth: '74px', height: '74px'}}
                alt="" 
                />
            </div>
            <div className='text-center' style={{maxWidth: '400px'}}>
                <h2 className='font-extrabold text-2xl'>ВАША КОРЗИНА НА ДАННЫЙ МОМЕНТ ПУСТА</h2>   
            </div>
        </div>
    );
}

export default CartEmpty;
