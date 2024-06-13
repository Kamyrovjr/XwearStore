import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ClothesDropdown = () => {
    const { clothes } = useSelector(state => state.cards)
    
    const uniqueCategories = new Set();

    clothes.forEach(clothes => {
        uniqueCategories.add(clothes.category);
    });

    const uniqueCategoriesArray = Array.from(uniqueCategories);

    const categoryTranslations = { 
        SWEATSHIRT: 'Толстовки',
        SHIRT: 'Рубашки',
        TEESHIRT: 'Футболки',
        JEANS: 'Джинсы'
    }



    return (
        <>
            <div className='bg-black absolute fixed top-10 -left-4 z-50' style={{padding: '23px 90px 5px 32px'}}>
                {
                    uniqueCategoriesArray?.map((category, index)=> (
                        <Link to={`/catalog/clothes?category=${category}`}>
                            <p key={index} className='text-white text-sm font-semibold mb-10'>
                            {categoryTranslations[category]}
                            </p>
                      </Link>
                    ))
                }
            </div>
        </>
    );
}

export default ClothesDropdown;
