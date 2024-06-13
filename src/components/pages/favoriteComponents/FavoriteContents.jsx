import React from 'react';
import FavoriteFilled from './FavoriteFilled';
import FavoriteEmpty from '@/components/pages/favoriteComponents/FavoriteEmpty';
import { useSelector } from 'react-redux';

const FavoriteContents = () => {
    const { favoriteItems } = useSelector(state => state.favoriteItems)

    console.log('dasdas', favoriteItems)

    return (
        <div className='flex flex-col items-start justify-start w-full'>
            <div className='mb-36'>
               <h2 className='font-bold text-2xl'>ИЗБРАННЫЕ ТОВАРЫ</h2>
            </div>
           {favoriteItems.length > 0 ?  <FavoriteFilled /> : <FavoriteEmpty />}
        </div>
    );
}

export default FavoriteContents;
