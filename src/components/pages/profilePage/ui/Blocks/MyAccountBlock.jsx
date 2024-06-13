import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/Routes'
import myOrders from '@/assets/images/icons/myOrders.png';
import editProfile from '@/assets/images/icons/editProfile.png'
import grayStar from '@/assets/images/icons/grayStar.png'
import exit from '@/assets/images/icons/Exit.png'
import address from '@/assets/images/icons/address.png'

const MyAccountBlock = ({ logout, firstName, activeMyProfile, onClickButtonMyProfile, activeButtonMyOrders, onClickButtonMyOrders }) => {
    return (
        <div className='flex flex-col items-start justify-start'>
            <div className='mb-9'>
                <h3 className='font-extrabold text-xl'>Приветствуем, {firstName}</h3>
            </div>
            <div className='flex items-center justify-start flex-wrap'>
            <div className='flex flex-col items-center justify-center border border-solid rounded border-gray-200 mb-8 cursor-pointer mr-5 mb-5' 
                style={{padding: '33px 0px', minWidth: '317px'}}
                onClick={onClickButtonMyProfile}
                active={activeMyProfile}
                >
                    <div className='mb-4'>
                        <img src={editProfile}
                        className='w-7 h-7' 
                        alt="" 
                        />
                    </div>
                    <p className='font-extrabold text-lg'>
                        Мой профиль
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center border border-solid rounded border-gray-200 mb-8 cursor-pointer mr-5 mb-5' 
                style={{padding: '33px 0px', minWidth: '317px'}}
                onClick={onClickButtonMyOrders}
                active={activeButtonMyOrders}>
                    <div className='mb-4'>
                        <img src={myOrders}
                        className='w-7 h-7' 
                        alt="" 
                        />
                    </div>
                    <p className='font-extrabold text-lg'>
                        Мои заказы
                    </p>
                </div>
                <Link to={ROUTES.FAVORITE}>
                    <div className='flex flex-col items-center justify-center border border-solid rounded border-gray-200 mb-8' style={{padding: '33px 0px', minWidth: '317px'}}>
                        <div className='mb-4'>
                            <img src={grayStar}
                            className='w-7 h-7' 
                            alt="" 
                            />
                        </div>
                        <p className='font-extrabold text-lg'>
                            Избранное
                        </p>
                    </div>
                </Link>
                <div className='flex flex-col items-center justify-center border border-solid rounded border-gray-200 mb-8 mr-5' style={{padding: '33px 0px', minWidth: '317px'}}>
                    <div className='mb-4'>
                        <img src={address}
                        className='w-7 h-7' 
                        alt="" 
                        />
                    </div>
                    <p className='font-extrabold text-lg'>
                        Адреса
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center border border-solid rounded border-gray-200 mb-8 cursor-pointer' 
                style={{padding: '33px 0px', minWidth: '317px'}}
                onClick={logout}
                >
                    <div className='mb-4'>
                        <img src={exit}
                        className='w-7 h-7' 
                        alt="" 
                        />
                    </div>
                    <p className='font-extrabold text-lg'>
                        Выход
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MyAccountBlock;
