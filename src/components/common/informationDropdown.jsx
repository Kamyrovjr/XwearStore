import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/Routes';

const InformationDropdown = () => {
    return (
        <div className='bg-black absolute fixed top-10 -left-6 z-50 text-nowrap' style={{padding: '23px 90px 45px 32px'}}>
            <p className='text-white text-sm font-semibold mb-10 cursor-pointer'>Наш блок</p>
            <Link to={ROUTES.CONTACTS}>
                <p className='text-white text-sm font-semibold mb-10'>Наши контакты</p>
            </Link>
            <p className='text-white text-sm font-semibold mb-10 cursor-pointer'>Доставка</p>
            <Link to={ROUTES.FAQ}>
                <p className='text-white text-sm font-semibold'>FAQ</p>
            </Link>
        </div>
    );
}

export default InformationDropdown;
