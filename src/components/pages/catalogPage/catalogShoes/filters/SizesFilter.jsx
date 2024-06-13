import React, { useState } from 'react';
import upload from '@/assets/images/icons/upload.png';
import downArrow from '@/assets/images/icons/downArrow.png';

const SizesFilter = ({ checkedSize, setCheckedSize, sneakers }) => { 
    const [isActive, setIsActive] = useState(false)
    const uniqueSizesArray = [];

    sneakers.forEach(sneaker => {
        if (Array.isArray(sneaker.size)) {
            sneaker.size.forEach(size => {
                const existingSizeIndex = uniqueSizesArray.findIndex(item => item.id === size.id);
                if (existingSizeIndex === -1) {
                    uniqueSizesArray.push(size);
                }
            });
        }
    });

    const handleSizeClick = (size) => {
        const updatedSizes = checkedSize.includes(size)
            ? checkedSize.filter(item => item !== size)
            : [...checkedSize, size];
        setCheckedSize(updatedSizes);
    };

    const handleHiddenFilterClick = () => {
        setIsActive(!isActive)
    }


    return (
        <div className='flex flex-col items-center rounded-lg border border-gray-300 p-6 gap-5 w-full' style={{ marginBottom: '30px'}}>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <h2 className='font-black text-xl'>РАЗМЕРЫ (EU)</h2>
                </div>
                <div>
                    <img src={!isActive ? upload : downArrow}
                    onClick={handleHiddenFilterClick} 
                    className='w-3 h-3' 
                    alt="" 
                    />
                </div>
            </div>
            <div className='flex items-center flex-wrap w-full justify-between'>
                {
                    !isActive && uniqueSizesArray.map(size => {
                        const isChecked = checkedSize.includes(size)
                        return ( 
                            <button 
                                key={size.id}
                                onClick={() => handleSizeClick(size)}
                                className='border rounded border-solid py-2 px-2.5 border-gray-200 mb-2.5' 
                                style={{minWidth: '82px', fontSize: '13px', backgroundColor: isChecked ?  "#49D0FF" : ''}}>
                                {size.value}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SizesFilter;