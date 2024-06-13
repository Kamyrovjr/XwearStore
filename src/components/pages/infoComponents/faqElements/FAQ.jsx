import React, { useState } from 'react';
import plus from '@/assets/images/icons/plus.svg';
import minus from '@/assets/images/icons/minus.svg';

const FAQ = () => {
    const [activeQuestions, setActiveQuestions] = useState({});

    const handlePlusClick = (questionId) => {
        setActiveQuestions(prevState => ({
            ...prevState,
            [questionId]: !prevState[questionId]
        }));
    };

    return (
        <div className='flex flex-col items-start justify-start w-full mb-36'>
            <div className='mb-14'>
                <h2 className='font-bold text-2xl'>FAQ</h2>
            </div>
            <div className='mb-5'>
                <h3 className='font-semibold text-xl'>ОБЩИЕ ВОПРОСЫ</h3>
            </div>
            <div className='flex flex-col items-start-justify-start w-full'>
                <div className='flex items-center justify-between border-b w-full mb-5' style={{paddingBottom: '10px'}}>
                    <p className='font-semibold text-sm'>ЧЕМ ЗАНИМАЕТСЯ ВАШ ИНТЕРНЕТ-МАГАЗИН?</p>
                    <div>
                        <img src={activeQuestions[1] ? minus : plus}
                        onClick={() => handlePlusClick(1)}
                        alt="" 
                        />
                    </div>
                </div>
                {activeQuestions[1] && (
                    <p className='text-sm mb-5'>Мы интеренет магазин и продаем одежду, обувь, аксессуары по всем странам СНГ</p>
                )}
            </div>
            <div className='flex flex-col items-start-justify-start w-full'>
                <div className='flex items-center justify-between border-b w-full mb-5' style={{paddingBottom: '10px'}}>
                    <p className='font-semibold text-sm'>ГАРАНТИРОВАНА ЛИ БЕЗОПАСНОСТЬ МОИХ ДАННЫХ?</p>
                    <div>
                        <img src={activeQuestions[2] ? minus : plus}
                        onClick={() => handlePlusClick(2)}
                        alt="" 
                        />
                    </div>
                </div>
                {activeQuestions[2] && (
                    <p className='text-sm mb-5'>Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста,
                    ознакомьтесь с нашей Политикой конфиденциальности.</p>
                )}
            </div>
            <div className='flex flex-col items-start-justify-start w-full mb-8'>
                <div className='flex items-center justify-between border-b w-full mb-5' style={{paddingBottom: '10px'}}>
                    <p className='font-semibold text-sm'>ГАРАНТИРОВАНА ЛИ БЕЗОПАСНОСТЬ МОИХ ДАННЫХ?</p>
                    <div>
                        <img src={activeQuestions[3] ? minus : plus}
                        onClick={() => handlePlusClick(3)}
                        alt="" 
                        />
                    </div>
                </div>
                {activeQuestions[3] && (
                    <p className='text-sm mb-5'>Да, мы гарантируем безопасность ваших данных</p>
                )}
            </div>
            <h3 className='font-semibold text-xl mb-5'>ТОВАРЫ</h3>
            <div className='flex flex-col items-start-justify-start w-full'>
                <div className='flex items-center justify-between border-b w-full mb-5' style={{paddingBottom: '10px'}}>
                    <p className='font-semibold text-sm'>ВЫ РЕАЛИЗУЕТЕ ОРИГИНАЛЬНЫЕ ТОВАРЫ?</p>
                    <div>
                        <img src={activeQuestions[4] ? minus : plus}
                        onClick={() => handlePlusClick(4)}
                        alt="" 
                        />
                    </div>
                </div>
                {activeQuestions[4] && (
                    <p className='text-sm mb-5'>Да, мы реализуем только оригинальные товары всех брендов</p>
                )}
            </div>
            <div className='flex flex-col items-start-justify-start w-full'>
                <div className='flex items-center justify-between border-b w-full mb-5' style={{paddingBottom: '10px'}}>
                    <p className='font-semibold text-sm'>В ВАШЕМ МАГАЗИНЕ ПРЕДСТАВЛЕНЫ НОВЫЕ ТОВАРЫ?</p>
                    <div>
                        <img src={activeQuestions[5] ? minus : plus}
                        onClick={() => handlePlusClick(5)}
                        alt="" 
                        />
                    </div>
                </div>
                {activeQuestions[5] && (
                    <p className='text-sm mb-5'>Товары обновляются каждый новый сезон</p>
                )}
            </div>
            <div className='flex flex-col items-start-justify-start w-full'>
                <div className='flex items-center justify-between border-b w-full mb-5' style={{paddingBottom: '10px'}}>
                    <p className='font-semibold text-sm'>ЦЕНА ЗАВИСИТ ОТ РАЗМЕРА?</p>
                    <div>
                        <img src={activeQuestions[6] ? minus : plus}
                        onClick={() => handlePlusClick(6)}
                        alt="" 
                        />
                    </div>
                </div>
                {activeQuestions[6] && (
                    <p className='text-sm mb-5'>В нашем магазине цена не зависит от размеров</p>
                )}
            </div>
            <div className='flex flex-col items-start-justify-start w-full'>
                <div className='flex items-center justify-between border-b w-full mb-5' style={{paddingBottom: '10px'}}>
                    <p className='font-semibold text-sm'>СТОИМОСТЬ ТОВАРов ОКОНЧАТЕЛЬНая?</p>
                    <div>
                        <img src={activeQuestions[7] ? minus : plus}
                        onClick={() => handlePlusClick(7)}
                        alt="" 
                        />
                    </div>
                </div>
                {activeQuestions[7] && (
                    <p className='text-sm mb-5'>Да, стоимость товара окончательна</p>
                )}
            </div>
        </div>
    );
}

export default FAQ;