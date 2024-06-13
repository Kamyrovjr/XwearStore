import React from 'react';
import wallet from '@/assets/images/icons/wallet.png'
import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/Routes'


const YourOrder = ({ handleOrderConfirmation, showSuccessMessage, cartItems }) => {
    const calculateItemTotalPrice = (item) => {
        return item.price * item.quantity;
    }
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + calculateItemTotalPrice(item), 0);
    }

    return (
        <div className='flex flex-col items-center justify-between w-full border rounded-lg border-gray-300 w-full' style={{padding: '28px 40px 40px 40px', minHeight: '706px'}}>
            <div className='w-full'>
                <h3 className='font-semibold text-xl mb-8'>ВАШ ЗАКАЗ</h3>
                {cartItems.map((item, index) => {
                return (
                    <div key={index} className='w-full flex items-center justify-between mb-5'>
                        <p className='text-sm'>{item.name}</p>
                        <p className='text-sm'>{calculateItemTotalPrice(item)}$</p>
                    </div>
                )
            })}
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
                <div className='w-full flex items-center justify-between mb-5'>
                    <p className='text-xl font-semibold'>Итого</p>
                    <p className='text-sm'>{calculateTotalPrice()} $</p>
                </div>
                <div className='flex items-center justifu-center mb-10'>
                    <div className='mr-8'>
                        <img src={wallet} alt="" />
                    </div>
                    <div>
                        <p className='font-semibold text-sm mb-2'>Оплата онлайн</p>
                        <p className='text-xs text-gray-300'>Оплата выбранного товара на нашем сайте осуществляется только онлайн.</p>
                    </div>
                </div>
                <div  
                    className='rounded-5 bg-black flex item-center justify-center cursor-pointer w-full mb-10'
                    onClick={handleOrderConfirmation} 
                    style={{padding: '23px 27px', height: '66px'}}>
                    <span
                    className='font-semibold text-sm text-white'>Оформить заказ</span> 
                </div>
                {showSuccessMessage && (
                    <Link to={ROUTES.HOME}><p className='text-sm text-green-500 cursor-pointer'>Ваш заказ оформлен, желаете продолжить покупки?</p></Link>
                )}
            </div>
        </div>
    );
}

export default YourOrder;
