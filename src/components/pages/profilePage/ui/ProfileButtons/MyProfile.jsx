import React from 'react';
import editProfile from '@/assets/images/icons/editProfile.png'

const MyProfile = ({ active, click }) => {
    return (
        <div className='flex items-center mb-5 cursor-pointer' onClick={click}>
            <div className='mr-5'>
                <img src={editProfile} 
                className='w-5 h-5'
                alt="" 
                />
            </div>
                <p className={`text-sm font-medium ${active ? 'font-semibold' : ''}`}>Мой профиль</p>
    </div>
    );
}

export default MyProfile;
