import React from 'react';

const EditPassword = ({ onChangePassword, passwordsMatch, currentPassword, newPassword, confirmPassword, setCurrentPassword, setNewPassword, setConfirmPassword }) => {
    return (
        <div className='flex flex-col items-start justify-start'>
            <div className='mb-9'>
                <h2 className='font-extrabold text-xl'>Смена пароля</h2>
            </div>
            <form className='flex flex-col items-start justify-start'>
                <div className='mb-8'>
                    <input type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className='text-sm placeholder:text-gray bg-slate-100 border-0'
                    style={{minWidth: '433px', minHeight: '71px', padding: '0 22px'}} 
                    placeholder='Текущий пароль'/>
                </div>
                <div className='mb-8'>
                    <input type="password"
                     value={newPassword}
                     onChange={(e) => setNewPassword(e.target.value)}
                    className='text-sm placeholder:text-gray bg-slate-100 border-0'
                    style={{minWidth: '433px', minHeight: '71px', padding: '0 22px'}} 
                    placeholder='Новый пароль'/>
                </div>
                <div className='mb-8'>
                    <input type="password"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)} 
                    className='text-sm placeholder:text-gray bg-slate-100 border-0'
                    style={{minWidth: '433px', minHeight: '71px', padding: '0 22px'}} 
                    placeholder='Повторите пароль'/>
                </div>
                <div  
                className='relative rounded-5 bg-black flex item-center justify-center cursor-pointer' 
                style={{padding: '23px 27px', minWidth: '200px', height: '66px'}}
                onClick={onChangePassword}
                >
                    <span className='text-white text-xs font-extrabold'>Сохранить</span>
                </div>
                {passwordsMatch && (
                    <p style={{ color: 'green', marginTop: '10px' }}>Ваш пароль успешно изменен</p>
                )}
            </form>
        </div>
    );
}

export default EditPassword;
