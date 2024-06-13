import React, { useState } from 'react';
import YourOrder from './YourOrder';
import { useDispatch, useSelector } from 'react-redux';
import { addOrdersItem } from '@/store/reducer/MyOrdersSlice';
import { removeAllItemsCart } from '@/store/reducer/CartSlice';

const PlaceOnOrder = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cartItems)
    const [myProfileData, setMyProfileData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        country: '',
        street: '',
        home: '',
        city: '',
        area: '',
        index: '',
        email: '',
    });

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        phone: false,
        country: false,
        street: false,
        home: false,
        city: false,
        area: false,
        index: false,
        email: false,
    });

    const handleOrderConfirmation = () => {
        const errors = {
            firstName: myProfileData.firstName.trim() === '',
            lastName: myProfileData.lastName.trim() === '',
            phone: myProfileData.phone.trim() === '',
            country: myProfileData.country.trim() === '',
            street: myProfileData.street.trim() === '',
            home: myProfileData.home.trim() === '',
            city: myProfileData.city.trim() === '',
            area: myProfileData.area.trim() === '',
            index: myProfileData.index.trim() === '',
            email: myProfileData.email.trim() === ''
        };

        setErrors(errors);

        if (!errors.firstName && !errors.lastName && !errors.phone && !errors.country && !errors.street && !errors.home && !errors.city && !errors.area && !errors.index && !errors.email) {
            setShowSuccessMessage(true);
            dispatch(addOrdersItem(cartItems))
            dispatch(removeAllItemsCart())
            setMyProfileData({
                firstName: '',
                lastName: '',
                phone: '',
                country: '',
                street: '',
                home: '',
                city: '',
                area: '',
                index: '',
                email: '',
            })
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 5000);
        }
    };

    const handleChange = (e, myData) => {
        const { value } = e.target;
        setMyProfileData(prevData => ({
            ...prevData,
            [myData]: value
        }));
    };

    return (
        <div className='flex flex-col items-start justify-start w-full'>
            <h2 className='font-bold text-2x mb-16'>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
            <div className='flex items-start justify-start w-full mb-36'>
                <div className='flex flex-col items-start justify-start border rounded-lg border-gray-300 mr-16' style={{padding: '28px 40px 40px 40px'}}>
                    <h3 className='font-semibold text-xl mb-10'>ПЛАТЕЖНЫЕ РЕКВИЗИТЫ</h3>
                    <div className='flex items-start justify-start' style={{minWidth: '666px'}}>
                        <div className='mb-8 mr-5 w-full'>
                            <p className='text-sm'>Имя</p>
                            <input type="text"
                            value={myProfileData.firstName}
                            onChange={(e) => handleChange(e, 'firstName')}
                            name='FirstName'
                            className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.firstName ? 'border-red-500' : ''}`}
                            style={{minHeight: '71px', padding: '0 22px'}} 
                            placeholder='Ваше имя'/>
                            {errors.firstName && <p className='text-xs text-red-500'>Введите ваше имя</p>}
                        </div>
                        <div className='mb-8 w-full'>
                            <p className='text-sm'>Фамилия</p>
                            <input type="text"
                            value={myProfileData.lastName}
                            onChange={(e) => handleChange(e, 'lastName')}
                            name='LastName'
                            className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.lastName ? 'border-red-500' : ''}`}
                            style={{minHeight: '71px', padding: '0 22px'}} 
                            placeholder='Ваша фамилия'/>
                            {errors.lastName && <p className='text-xs text-red-500'>Введите вашу фамилию</p>}
                        </div>
                    </div>
                    <div className='mb-8 w-full'>
                        <p className='text-sm'>Страна</p>
                        <input type="country"
                        value={myProfileData.country}
                        onChange={(e) => handleChange(e, 'country')} 
                        className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.country ? 'border-red-500' : ''}`}
                        style={{minHeight: '71px', padding: '0 22px'}}
                        placeholder='Выберете страну' 
                        />
                        {errors.country && <p className='text-xs text-red-500'>Введите вашу страну</p>} 
                    </div>
                    <div className='mb-8 w-full'>
                        <p className='text-sm'>Город</p>
                        <input type="text"
                        value={myProfileData.city}
                        onChange={(e) => handleChange(e, 'city')} 
                        name='city' 
                        className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.city ? 'border-red-500' : ''}`}
                        style={{minHeight: '71px', padding: '0 22px'}}
                        placeholder='Напишите свой город'
                        />
                         {errors.city && <p className='text-xs text-red-500'>Введите ваш город</p>} 
                    </div>
                    <div className='flex items-start justify-start' style={{minWidth: '666px'}}>
                        <div className='mb-8 mr-5 w-full'>
                            <p className='text-sm'>Улица</p>
                            <input type="text"
                            value={myProfileData.street}
                            onChange={(e) => handleChange(e, 'street')}
                            name='street'
                            className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.street ? 'border-red-500' : ''}`}
                            style={{minHeight: '71px', padding: '0 22px'}} 
                            placeholder='Ваша улица'/>
                            {errors.street && <p className='text-xs text-red-500'>Введите вашу улицу</p>}
                        </div>
                        <div className='mb-8 w-full'>
                            <p className='text-sm'>Номер дома/квартиры</p>
                            <input type="text"
                            value={myProfileData.home}
                            onChange={(e) => handleChange(e, 'home')}
                            name='home'
                            className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.home ? 'border-red-500' : ''}`}
                            style={{minHeight: '71px', padding: '0 22px'}} 
                            placeholder='Ваш номер дома/квартиры'/>
                            {errors.home && <p className='text-xs text-red-500'>Введите ваш дом/квартиру</p>}
                        </div>
                    </div>
                    <div className='flex items-start justify-start' style={{minWidth: '666px'}}>
                        <div className='mb-8 mr-5 w-full'>
                            <p className='text-sm'>Область</p>
                            <input type="text"
                            value={myProfileData.area}
                            onChange={(e) => handleChange(e, 'area')}
                            name='area'
                            className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.area ? 'border-red-500' : ''}`}
                            style={{minHeight: '71px', padding: '0 22px'}} 
                            placeholder='Ваша область'/>
                            {errors.area && <p className='text-xs text-red-500'>Введите вашу область</p>}
                        </div>
                        <div className='mb-8 w-full'>
                            <p className='text-sm'>Индекс</p>
                            <input type="text"
                            value={myProfileData.index}
                            onChange={(e) => handleChange(e, 'index')}
                            name='index'
                            className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.index ? 'border-red-500' : ''}`}
                            style={{minHeight: '71px', padding: '0 22px'}} 
                            placeholder='Ваш индекс'/>
                            {errors.index && <p className='text-xs text-red-500'>Введите ваш индекс</p>}
                        </div>
                    </div>
                    <div className='flex items-start justify-start' style={{minWidth: '666px'}}>
                        <div className='mb-8 mr-5 w-full'>
                            <p className='text-sm'>Email</p>
                            <input type="email"
                            value={myProfileData.email}
                            onChange={(e) => handleChange(e, 'email')}
                            name='Email'
                            className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.email ? 'border-red-500' : ''}`}
                            style={{minHeight: '71px', padding: '0 22px'}} 
                            placeholder='Ваш email'/>
                            {errors.email && <p className='text-xs text-red-500'>Введите ваш email</p>}
                        </div>
                        <div className='mb-8 w-full'>
                            <p className='text-sm'>Телефон</p>
                            <input type="phone"
                            value={myProfileData.phone}
                            onChange={(e) => handleChange(e, 'phone')}
                            name='phone'
                            className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.phone ? 'border-red-500' : ''}`}
                            style={{minHeight: '71px', padding: '0 22px'}} 
                            placeholder='Ваш телефон'/>
                            {errors.phone && <p className='text-xs text-red-500'>Ведите ваш номер телефона</p>}
                        </div>
                    </div>
                </div>
                <YourOrder handleOrderConfirmation={handleOrderConfirmation} showSuccessMessage={showSuccessMessage} cartItems={cartItems}/>
            </div>
        </div>
    );
}

export default PlaceOnOrder;
