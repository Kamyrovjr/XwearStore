import React from 'react';
import { useState } from 'react';
import upload from '@/assets/images/icons/upload.png'
import downArrow from '@/assets/images/icons/downArrow.png';


const ModelsFilter = ({ onSelectedModels, accessories }) => {
    const [checkedModels, setCheckedModels] = useState([]);
    const [isActive, setIsActive] = useState(false)

    const uniqueModels = new Set()

    accessories.forEach(accessories => {
        uniqueModels.add(accessories.model)
    });

    const uniqueModelsArray = Array.from(uniqueModels)

    const handleCheckboxChange = (model) => {
        if(checkedModels.includes(model)) {
            setCheckedModels(checkedModels.filter(item => item !== model))
        } else {
            setCheckedModels([...checkedModels, model])
        }
    } 

    const handleHiddenFilterClick = () => {
        setIsActive(!isActive)
    }

    return (
        <div className='flex flex-col items-start justufy-start rounded-lg border border-gray-300 p-6 gap-5 w-full' style={{marginBottom: '30px'}}>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <h2 className='font-black text-xl'>МОДЕЛЬ</h2>
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
                    !isActive && uniqueModelsArray?.map((model, index) => {
                        const isChecked = checkedModels.includes(model)
                        return (
                            <form key={index} className='flex items-center mb-5'>
                                <input type="checkbox" 
                                className='w-6 h-6 rounded-md mr-2.5'
                                onChange={() => handleCheckboxChange(model)}
                                onClick={() => onSelectedModels(model)}
                                />
                                <span
                                style={{ fontSize: '13px', fontWeight: isChecked ? 'bold' : 'normal' }} 
                                >{model}</span>
                            </form>
                        );
                    })
                }
            </div>
        </div> 
    );
}

export default ModelsFilter;
