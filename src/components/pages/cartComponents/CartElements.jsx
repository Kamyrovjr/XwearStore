import React from 'react';
import { useSelector } from 'react-redux';
import CartFilled from './CartFilled';
import CartEmpty from './CartEmpty';

const CartElements = () => {
    const { cartItems } = useSelector(state => state.cartItems)

    return (
        <div className='flex flex-col items-start justify-start w-full mb-36'>
            <div className='flex items-end mb-11'>
                <h2 className='font-black text-3xl mr-10'>Корзина</h2>
                <p className='font-semibold text-xl' style={{color: '#888'}}>{cartItems.length} товар(а)</p>
            </div>
            {
                cartItems.length > 0 ? <CartFilled /> : <CartEmpty />
            }
        </div>
    );
}

export default CartElements;
