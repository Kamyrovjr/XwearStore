import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const AccesseriosDropdown = () => {
    const { accessories } = useSelector(state => state.cards)
    
    const uniqueCategories = new Set();

    accessories.forEach(accesserios => {
        uniqueCategories.add(accesserios.category);
    });

    const uniqueCategoriesArray = Array.from(uniqueCategories);

    const categoryTranslations = { 
        CAP: 'Кепки',
        BAG: 'Сумки',
        HAT: 'Шапки',
        GLASSES: 'Очки'
    }


    return (
        <>
            <div className='bg-black absolute fixed top-10 -left-4 z-50' style={{padding: '23px 90px 5px 32px'}}>
                {
                    uniqueCategoriesArray?.map((category, index)=> (
                        <Link to={`/catalog/accessories?category=${category}`}>
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

export default AccesseriosDropdown;
