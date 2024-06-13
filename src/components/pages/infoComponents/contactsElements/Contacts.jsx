import React, { useState } from 'react';
import ContactUs from './ContactUs';

const Contacts = () => {
    const [myProfileData, setMyProfileData] = useState({
        firstName: '',
        lastName: '',
        phone: ''
    });

    const [myQuestion, setMyquestion] = useState({
        textMessage: ''
    });

    const [isAskQuestion, setisAskQuestion] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        phone: false,
        textMessage: false
    });

    const handleAskQuestionClick = () => {
        const errors = {
            firstName: myProfileData.firstName.trim() === '',
            lastName: myProfileData.lastName.trim() === '',
            phone: myProfileData.phone.trim() === '',
            textMessage: myQuestion.textMessage.trim() === ''
        };

        setErrors(errors);

        if (!errors.firstName && !errors.lastName && !errors.phone && !errors.textMessage) {
            setisAskQuestion(!isAskQuestion);
            setMyProfileData({
                firstName: '',
                lastName: '',
                phone: ''
            });
            setMyquestion({
                textMessage: ''
            });
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        }
    };

    const handleChange = (e, fieldName) => {
        const { value } = e.target;
        setMyProfileData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };

    const handleChangeMyQuestion = (e) => {
        const { value } = e.target
        setMyquestion(prevQuestion => ({
            ...prevQuestion,
            textMessage: value
        }));
    }

    return (
        <div className='flex flex-col items-start justify-start w-full'>
            <div className='mb-24'>
                <h2 className='font-bold text-2xl'>КОНТАКТЫ</h2>
            </div>
            <div className='flex items-start justify-start mb-36'>
                <div className='flex-flex-col items-start justify-start mr-20'>
                    <div>
                        <h3 className='font-semibold text-xl mb-5'>НАПИШИТЕ НАМ</h3>
                    </div>
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
                            <p className='text-sm'>Телефон</p>
                            <input type="tel"
                            value={myProfileData.phone}
                            onChange={(e) => handleChange(e, 'phone')}
                            name='phone'
                            className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.phone ? 'border-red-500' : ''}`}
                            style={{minHeight: '71px', padding: '0 22px'}} 
                            placeholder='Номер телефона'/>
                            {errors.phone && <p className='text-xs text-red-500'>Введите ваш номер телефона</p>}
                    </div>
                    <div className='mb-8 w-full'>
                        <p className='text-sm'>Текст сообщения</p>
                        <textarea
                            value={myQuestion.textMessage}
                            onChange={(e) => handleChangeMyQuestion(e)}
                            name='text'
                            className={`text-sm placeholder:text-gray bg-slate-100 border-0 w-full ${errors.textMessage ? 'border-red-500' : ''}`}
                            style={{ minHeight: '101px', padding: '0 22px', overflowY: 'auto', resize: 'vertical' }}
                            placeholder='Опишите ваш вопрос как можно подробнее'
                        />
                        {errors.textMessage && <p className='text-xs text-red-500'>Введите ваш вопрос</p>}
                    </div>
                    <div  
                    className='rounded-5 bg-black flex item-center justify-center cursor-pointer mb-5' 
                    style={{padding: '23px 27px', maxWidth: '251px', height: '66px'}}>
                    <span onClick={handleAskQuestionClick} 
                    className='font-semibold text-sm text-white'>Задать вопрос</span> 
                    </div>
                    {showSuccessMessage && (
                        <p className='text-sm text-green-500'>Ваш вопрос принят в обработку, мы с вами свяжемся</p>
                    )}
                </div>
                <ContactUs />    
            </div>
        </div>
    );
}

export default Contacts;