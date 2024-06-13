import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/utils/Routes';
import { login } from '@/store/reducer/AuthSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [checked, setChecked] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });
    const [rememberMe, setRememberMe] = useState(false);
    const handleLogin = (formData, rememberMe) => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        const storedPassword = storedUserData?.password;
    
        if (storedUserData && storedUserData.phone === formData.phone && storedPassword === formData.password) {
            if (rememberMe) {
                localStorage.setItem('userData', JSON.stringify(storedUserData));
            } 
            dispatch(login(storedUserData));
            navigate(ROUTES.HOME)
        } 
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className='flex flex-col items-center w-full'>
            <form className='w-full' onSubmit={() => handleLogin(formData, rememberMe)}>
                <div className='w-full mb-7'>
                    <input type="phone"
                    className='border border-solid border-md w-full'
                    style={{padding: '10px 5px'}}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='Телефон'/>
                </div>
                <div className='w-full mb-7'>
                    <input type="password"
                    className='border border-solid border-md w-full'
                    style={{padding: '10px 5px'}}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Пароль'/>
                </div>
                <div className='flex items-center justify-between w-full mb-7'>
                   <div>
                        <input type="checkbox"
                        name="checkbox"
                        checked={rememberMe}
                        onChange={handleCheckboxChange}/>
                        <span className='text sm ml-2.5 cursor-pointer'
                        onClick={() => setChecked(!checked)}
                        >Запомнить меня
                        </span>
                   </div>
                   <div>
                    <p className='text-sm underline cursor-pointer hover:font-extrabold'>Забыли пароль?</p>
                   </div>
                </div>
                <button className='bg-black text-white text-sm font-black rounded-lg border-solid border border-black w-full hover:bg-white hover:text-black' 
                    style={{padding: '23px 27px'}}
                    type="submit"
                    onClick={() => handleLogin(formData, rememberMe)}>    
                        ВОЙТИ
                </button>
            </form>
        </div>
    );
}

export default Login;