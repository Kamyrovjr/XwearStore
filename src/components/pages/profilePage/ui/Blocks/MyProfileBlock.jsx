import React from "react";

const MyProfileBlock = ({ onChange, saveProfile, myProfileData, savedMessage }) => {
    return (
        <div className='flex flex-col items-start justify-start'>
            <div className='mb-9'>
                <h2 className='font-extrabold text-xl'>Мой профиль</h2>
            </div>
            <form className='flex items-center justify-between flex-wrap'>
                <div className='mb-8'>
                    <p className='text-sm'>Имя</p>
                    <input type="text"
                    name='firstName'
                    value={myProfileData.firstName}
                    onChange={onChange}
                    className='text-sm placeholder:text-gray bg-slate-100 border-0'
                    style={{minWidth: '433px', minHeight: '71px', padding: '0 22px'}} 
                    placeholder={myProfileData.firstName}/>
                </div>
                <div className='mb-8'>
                    <p className='text-sm'>Фамилия</p>
                    <input type="text"
                    name='lastName'
                    value={myProfileData.lastName}
                    onChange={onChange}
                    className='text-sm placeholder:text-gray bg-slate-100 border-0'
                    style={{minWidth: '433px', minHeight: '71px', padding: '0 22px'}} 
                    placeholder={myProfileData.lastName} />
                </div>
                <div className='mb-8'>
                    <p className='text-sm'>Почта</p>
                    <input type="email"
                    name='email'
                    value={myProfileData.email}
                    onChange={onChange}
                    className='text-sm placeholder:text-gray bg-slate-100 border-0'
                    style={{minWidth: '433px', minHeight: '71px', padding: '0 22px'}} 
                    placeholder={myProfileData.email}/>
                </div>
                <div className='mb-8'>
                    <p className='text-sm'>Телефон</p>
                    <input type="phone"
                    name='phone'
                    value={myProfileData.phone}
                    onChange={onChange}
                    className='text-sm placeholder:text-gray bg-slate-100 border-0'
                    style={{minWidth: '433px', minHeight: '71px', padding: '0 22px'}} 
                    placeholder={myProfileData.phone}/>
                </div>
                <div  
                className='relative rounded-5 bg-black flex item-center justify-center cursor-pointer' 
                style={{padding: '23px 27px', minWidth: '200px', height: '66px'}}
                onClick={saveProfile}>
                    <span className='text-white text-xs font-extrabold'>Сохранить</span>
                </div>
                {savedMessage && (
                    <p style={{ color: 'green', marginTop: '10px' }}>Ваши данные сохранены</p>
                )}
            </form>
        </div>
    );
}

export default MyProfileBlock;
