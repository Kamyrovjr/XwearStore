import React, { useState } from 'react';

const CategoryFilter = ({ sneakers, onSelectedCategories }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const uniqueCategories = new Set();

    sneakers.forEach(sneaker => {
        uniqueCategories.add(sneaker.category);
    });

    const uniqueCategoriesArray = Array.from(uniqueCategories);

    const handleColorTextChange = (category) => {
    if(selectedCategories.includes(category)){
        setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
        setSelectedCategories([...selectedCategories, category]);
    }
    }

    const categoryTranslations = {
        SNEAKERS: 'КРОССОВКИ',
        LOAFERS: 'МОКАСИНЫ',
        KEDS: 'КЕДЫ',
        SANDALS: 'САНДАЛИ'
    }

    return (
        <>
            <div className='rounded-lg border border-gray-300 p-6 gap-5 w-full' style={{marginBottom: '30px'}}>
                <h2 className='font-black text-xl' style={{marginBottom: '21px'}}>КАТЕГОРИИ</h2>
                {uniqueCategoriesArray.map((category, index) => {
                    const isChecked = selectedCategories.includes(category)
                    return (
                        <p className='font-semibold text-sm cursor-pointer' 
                        style={{marginBottom: '19px', color: isChecked ? '#49D0FF' : ''}}
                        key={index} onClick={() => {
                        handleColorTextChange(category)
                        onSelectedCategories(category)}}>
                        {categoryTranslations[category]} 
                    </p>
                    )
                })}
            </div>
        </>
    );
}

export default CategoryFilter;
