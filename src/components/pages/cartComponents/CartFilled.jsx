import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/Routes';
import { incrementItem, decrementItem, removeItemCart, removeAllItemsCart } from '@/store/reducer/CartSlice';
import deleteIcon from '@/assets/images/icons/delete.png'

const CartFilled = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cartItems)
    const [totalItem, setTotalItems] = useState(0)
    const [selectAll, setSelectAll] = useState(false)

    const handleSelectAll = () => {
        setSelectAll(!selectAll)
    }

    const handleRemoveAllItems = () => {
        if(selectAll) {
            dispatch(removeAllItemsCart())
        }
    }

    console.log('selectAll', selectAll)

    const deleteItemsCart = (itemId) => {
        dispatch(removeItemCart(itemId))
    }

    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId))
    }

    const handleDecrementItem = (itemId) => {
        dispatch(decrementItem(itemId))
    }

    const calculateItemTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + calculateItemTotalPrice(item), 0);
    }

    useEffect(() => {
        const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
        setTotalItems(totalQuantity); 
    }, [cartItems])        

    console.log('asdasd', cartItems)

    return (
        <div className='flex flex-col items-start justify-start w-full'>
            <div className='flex items-start justify-start mb-5'>
                <div>
                    <input type="checkbox" 
                    className='mr-5 w-5 h-5'
                    onChange={handleSelectAll}
                    checked={selectAll}
                    />
                </div>
                <p className='font-bold text-lg mr-24'>Выбрать все</p>
                <div className='flex items-center justify-center cursor-pointer'>
                    <img src={deleteIcon}
                    onClick={handleRemoveAllItems} 
                    className='w-8 h-6 mr-2'
                    alt="" 
                    />
                    <p className='font-semibold text-sm'>Удалить {cartItems.length} товар(а)</p>
                </div>
            </div>
            <div className='flex items-start justify-start'>
                <div className='flex flex-col items-start justify-start mr-20'>
                    {
                        cartItems.map(item => {
                            return (
                                <div className='flex items-start justify-between w-full pb-5 pt-5 border-b border-black-200 mb-10' 
                                key={item.id}>
                                    <div>
                                        <input type="checkbox" 
                                        name="checkbox"
                                        checked={selectAll}
                                        className='mr-5 w-5 h-5'
                                        />
                                    </div>
                                    <img src={item.image}
                                    className='h-28 w-28 mr-10' 
                                    alt="" 
                                    />
                                    <div className='flex flex-col items-start justify-between mr-36'>   
                                        <div className='mb-14'>
                                            <p className='font-medium text-sm'>Название: {item.name}</p>
                                            <p className='font-medium text-sm'>Цена: {item.price}$</p>
                                            <p className='font-medium text-sm'>Размер: {item.size.value} EU</p>
                                        </div>
                                        <div className='flex items-center justify-between border border-gray-300 bg-gray-100 rounded' 
                                        style={{padding: '0 5px', minWidth: '90px'}}> 
                                            <p className='font-bold text-sm cursor-pointer' onClick={() => handleDecrementItem(item.id)}>-</p>
                                            <p className='font-bold text-sm'>{item.quantity}</p>
                                            <p className='font-bold text-sm cursor-pointer' onClick={() => handleIncrement(item.id)}>+</p> 
                                        </div>    
                                    </div>
                                    <div className='flex flex-col items-start justify-between'>
                                        <div className='mb-16'>
                                            <p className='font-medium text-sm'>{calculateItemTotalPrice(item)}$</p>
                                        </div>
                                        <div>
                                            <img src={deleteIcon}
                                            onClick={() => deleteItemsCart(item.id)}
                                            className='w-8 h-6 cursor-pointer'
                                            alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        }) 
                    }
                </div>
                <div className='flex flex-col items-start border rounded-lg shadow-black-500/50' style={{padding: '10px 10px', minWidth: '410px'}}>
                    <h2 className='font-semibold text-xl mb-10'>Сумма заказа</h2>
                    <div className='flex items-center justify-between w-full mb-10 border-b border-gray-300 pb-5'>
                        <p className='font-medium text-sm' >
                            {totalItem} товар(а) на сумму
                        </p>
                        <p className='font-medium text-sm'>{calculateTotalPrice()} $</p>
                    </div>
                    <div className='flex item-center justify-between w-full mb-10'>
                        <p className='font-semibold text-xl'>Итого</p>
                        <p className='font-semibold text-xl'>{calculateTotalPrice()} $</p>
                    </div>
                    <Link to={ROUTES.PLACEONORDER} className='w-full'>
                        <button className='w-full border rounded bg-black text-white font-semibold text-xl py-5 hover:bg-white hover:text-black'>Оформить заказ</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartFilled;
