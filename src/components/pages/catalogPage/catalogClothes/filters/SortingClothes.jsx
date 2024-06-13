import React, { useState } from 'react';
import downArrow from '@/assets/images/icons/downArrow.png'
import ascending from '@/assets/images/icons/ascending.png'
import descending from '@/assets/images/icons/descending.png'

const SortingClothes = ({ sortClothes }) => {
    const [isActive, setIsActive] = useState(false)

    const handleClickSorting = () => {
        setIsActive(!isActive)
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center border rounded border-gray-400' style={{padding: '2px 4px 2px 4px'}}>
                <p className='font-semibold text-sm mr-2 text-gray-500'>Сортировка по цене</p>
                <div>
                    <img src={downArrow}
                    onClick={handleClickSorting}
                    alt=""
                    className='w-3 h-3' 
                    />
                </div>
            </div>
            {isActive && (
                    <div className='w-full flex flex-col items-start justify-start border rounded border-gray-400'>
                        <div className='flex items-center justify-center mb-2'
                        onClick={() => sortClothes('ascending')}>
                            <img src={ascending}

                            className='w-5 h-5 mr-2' 
                            alt="" 
                            />
                            <p className='font-semibold text-sm text-gray-500 cursor-pointer'>самая дешевая</p>
                        </div>
                        <div className='flex items-center justify-center'
                        onClick={() => sortClothes('descending')} >
                            <img src={descending}
                            className='w-5 h-5 mr-2' 
                            alt="" 
                            />
                            <p className='font-semibold text-sm text-gray-500 cursor-pointer'>самая дорогая</p>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default SortingClothes;
