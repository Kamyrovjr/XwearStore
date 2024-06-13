import React from 'react';
import myOrders from '@/assets/images/icons/myOrders.png';

const MyOrders = ({ active, click }) => {
    return (
        <div className='flex items-center mb-5 cursor-pointer' onClick={click}>
            <div className='mr-5'>
                <img src={myOrders} 
                className='w-5 h-5'
                alt="" 
                />
            </div>
            <p className={`text-sm font-medium ${active ? 'font-semibold' : ''}`}>Мои заказов</p>
    </div>
    );
}

export default MyOrders;
