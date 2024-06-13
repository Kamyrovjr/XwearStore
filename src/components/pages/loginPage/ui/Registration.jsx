import React, { useState } from 'react';
import { register } from '@/store/reducer/AuthSlice';
import { useDispatch } from 'react-redux';


const Registration = () => {
    const dispatch = useDispatch()
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [registrationMessage, setRegistrationMessage] = useState('');
    const [formData, setFormData] = useState({
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formData))
        setRegistrationMessage('Вы успешно зарегистрировались');
        localStorage.setItem('userData', JSON.stringify(formData));
    };

    return (
        <div className='flex flex-col items-center w-full'>
        <form className='w-full' onSubmit={handleSubmit}>
            <div className='w-full mb-7'>
                <input type="phone"
                className='border border-solid border-md w-full placeholder:text-slate-500'
                style={{padding: '10px 5px'}}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder='Телефон'/>
            </div>
            <div className='w-full mb-7'>
                <input type="password"
                className='border border-solid border-md w-full placeholder:text-slate-500'
                style={{padding: '10px 5px'}}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Пароль'/>
            </div>
            <div className='w-full mb-7'>
                <input type="password"
                className='border border-solid border-md w-full placeholder:text-slate-500'
                style={{padding: '10px 5px'}}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='Повторить пароль'/>
                {!passwordsMatch && <p className="text-red-500 text-sm">Пароли не совпадают</p>}
            </div>
            <button className='bg-black text-white text-sm font-black rounded-lg border-solid border border-black w-full hover:bg-white hover:text-black' 
            style={{padding: '23px 27px'}}
            type='submit'
            onClick={handleSubmit}>
                ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
            {registrationMessage && <p>{registrationMessage}</p>}
        </form>
    </div>
    );
}

export default Registration;
