import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShoesDropdown = () => {
    const { sneakers } = useSelector(state => state.cards)
    
    const uniqueCategories = new Set();

    sneakers.forEach(sneakers => {
        uniqueCategories.add(sneakers.category);
    });

    const uniqueCategoriesArray = Array.from(uniqueCategories);

    const categoryTranslations = {
        SNEAKERS: 'Кроссовки',
        LOAFERS: 'Мокасины',
        KEDS: 'Кеды',
        SANDALS: 'Сандали'
    }


    return (
        <>
            <div className='bg-black absolute fixed top-10 -left-4 z-50' style={{padding: '23px 90px 5px 32px'}}>
                {
                    uniqueCategoriesArray?.map((category, index)=> (
                        <Link to={`/catalog/shoes?category=${category}`}>                       
                            <p key={index}  
                            className='text-white text-sm font-semibold mb-10'>
                            {categoryTranslations[category]}
                            </p>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

export default ShoesDropdown;
