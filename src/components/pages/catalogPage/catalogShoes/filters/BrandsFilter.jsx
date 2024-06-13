import React from 'react';
import { useState } from 'react';
import upload from '@/assets/images/icons/upload.png'
import downArrow from '@/assets/images/icons/downArrow.png';


const BrandsFilter = ({ onSelectedBrands, sneakers }) => {
    const [checkedBrands, setCheckedBrands] = useState([]);
    const [isActive, setIsActive] = useState(false)

    const uniqueBrands = new Set()

    sneakers.forEach(sneaker => {
        uniqueBrands.add(sneaker.brand)
    });

    const uniqueBrandsArray = Array.from(uniqueBrands)

    const handleCheckboxChange = (brand) => {
        if(checkedBrands.includes(brand)) {
            setCheckedBrands(checkedBrands.filter(item => item !== brand))
        } else {
            setCheckedBrands([...checkedBrands, brand])
        }
    } 

    const handleHiddenFilterClick = () => {
        setIsActive(!isActive)
    }

    return (
        <div className='flex flex-col items-center justufy-start rounded-lg border border-gray-300 p-6 gap-5 w-full' style={{marginBottom: '30px'}}>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <h2 className='font-black text-xl'>БРЕНДЫ</h2>
                </div>
                <div>
                    <img src={!isActive ? upload : downArrow}
                    onClick={handleHiddenFilterClick} 
                    className='w-3 h-3'
                    alt=""
                    />
                </div>
            </div>
            <div className='flex  flex-col item-center justify-start overflow-x-auto scrollbar-thumb-black scrollbar-track-gray-300' style={{maxHeight: '275px'}}>
                {
                    !isActive && uniqueBrandsArray?.map((brand, index) => {
                        const isChecked = checkedBrands.includes(brand)
                        return (
                            <form key={index} className='flex items-center mb-5'>
                                <input type="checkbox" 
                                className='w-6 h-6 rounded-md mr-2.5'
                                onChange={() => handleCheckboxChange(brand)}
                                onClick={() => onSelectedBrands(brand)}
                                />
                                <span
                                style={{ fontSize: '13px', fontWeight: isChecked ? 'bold' : 'normal' }}>{brand}</span>
                            </form>
                        );
                    })
                }
            </div>
        </div> 
    );
}

export default BrandsFilter;
