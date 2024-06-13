import React from 'react';
import points from '@/assets/images/icons/points.png'

const Details = ({ product }) => {
    const getCategoryTranslation = (category) => {
        switch (category) {
            case 'SNEAKERS':
                return 'Кроссовки'
            case 'LOAFERS':
                return 'Мокасины'
            case 'KEDS':
                return 'Кеды'
            case 'SANDALS':
                return 'Сандали'
            case 'SWEATSHIRT':
                return 'Толстовки'
            case 'SHIRT':
                return 'Рубашки'
            case 'TEESHIRT':
                return 'Футболки'
            case 'JEANS':
                return 'Джинсы'
            case 'CAP':
                return 'Кепки'
            case 'BAG':
                return 'Сумки'
            case 'HAT':
                return 'Шапки'
            case 'GLASSES':
                return 'Очки'
        }
    }   

    const generateRandomNumber = () => {
        let min = 100000
        let max = 999999
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let output = generateRandomNumber()

    return (
        <div className='flex flex-col items-start' style={{minWidth: '475px', minHeight: '217px'}}>
            <div>
                <h2 className='font-bold text-lg mb-5'>Детали</h2>
            </div>
            <div className='flex flex-col items-start  w-full'>
               <div className='flex items-center justify-between w-full mb-5'>
                <p className='font-medium text-sm'>Артикул</p>
                <div>
                    <img src={points} 
                    style={{minWidth: '256px'}}
                    alt="" 
                    />
                </div>
                <p className='font-medium text-sm'>{output}</p>
               </div>
               <div className='flex items-center justify-between w-full mb-5'>
                <p className='font-medium text-sm'>Категория</p>
                <div>
                    <img src={points} 
                    style={{minWidth: '256px'}}
                    alt="" 
                    />
                </div>
                <p className='font-medium text-sm'>{getCategoryTranslation(product.category)}</p>
               </div>
               <div className='flex items-center justify-between w-full mb-5'>
                <p className='font-medium text-sm'>Бренд</p>
                <div>
                    <img src={points} 
                    style={{minWidth: '256px'}}
                    alt="" 
                    />
                </div>
                <p className='font-medium text-sm'>{product.brand}</p>
               </div>
               <div className='flex items-center justify-between w-full mb-5'>
                <p className='font-medium text-sm'>Модель</p>
                <div>
                    <img src={points} 
                    style={{minWidth: '256px'}}
                    alt="" 
                    />
                </div>
                <p className='font-medium text-sm'>{product.model}</p>
               </div>
            </div>
        </div>
    );
}

export default Details;
