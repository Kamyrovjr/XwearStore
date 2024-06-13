import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import leftArrow from '@/assets/images/icons/leftArrow.png';

const MyOrdersBlock = () => {
    const { myOrders } = useSelector(state => state.myOrders)
    const [date, setDate] = useState(new Date())
 
    const calculateItemTotalPrice = (order) => {
        return order.price * order.quantity;
    }
    const calculateTotalPrice = () => {
        return myOrders.reduce((total, item) => total + calculateItemTotalPrice(item), 0);
    }
    
    const calculateTotalPriceWithDelivery = () => {
        return 20 + calculateTotalPrice()
    }


    return (
        <div className='flex flex-col items-start justify-start'>
            <div className='mb-9'>
                <h2 className='font-extrabold text-xl'>Мои заказы</h2>
            </div>
            <div className='flex flex-col items-start w-full border border-gray-300 rounded'  style={{padding: '25px 28px 30px 29px', minWidth: '1012px'}}>
                <div className='w-full flex items-center justify-between mb-8'>
                    <div className='flex flex-col items-start'>
                        <p className='font-bold text-lg'>Заказ №43526</p>
                        <div className='flex items-start'>
                            <p className='text-sm mr-1'>Был оформлен</p>
                            <p className='text-sm font-bold'>{date.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className='flex items-center border-b-2 border-black'>
                        <div className='mr-2 mb-2'>
                            <img src={leftArrow}
                            className='w-3 h-3'
                            alt="" 
                            />
                        </div>
                        <p className='font-extrabold text-xs mb-2'>Вернуться к заказам</p>
                    </div>
                </div>
                <div className='w-full flex items-center justify-between border-b border-gray-300' style={{padding: '18px 19px'}}>
                    <p className='font-bold text-sm'>Товар</p>
                    <p className='font-bold text-sm'>Цена</p>
                </div>
                {myOrders.map((order, index) => (
                    <div key={index} className='w-full flex items-center justify-between border-b border-gray-300' style={{padding: '18px 19px'}}>
                        <p className='font-bold text-sm'>{order.name}</p>
                        <p className='font-bold text-sm'>{calculateItemTotalPrice(order)}$</p>
                    </div>
                ))}
                <div className='w-full flex items-center justify-between border-b border-gray-300' style={{padding: '18px 19px'}}>
                    <p className='font-bold text-sm'>Всего</p>
                    <p className='font-semibold text-sm'>{calculateTotalPrice()} $</p>
                </div>
                <div className='w-full flex items-center justify-between border-b border-gray-300' style={{padding: '18px 19px'}}>
                    <p className='font-bold text-sm'>Доставка</p>
                    <p className='font-semibold text-sm'>20 $</p>
                </div>
                <div className='w-full flex items-center justify-between border-b border-gray-300' style={{padding: '18px 19px'}}>
                    <p className='font-bold text-lg'>Итого</p>
                    <p className='font-semibold text-lg'>{calculateTotalPriceWithDelivery()} $</p>
                </div>
            </div>
        </div>
    );
}

export default MyOrdersBlock;
