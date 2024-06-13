import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchCardFromServer } from '@/store/reducer/CardFromApiSlice'
import { addFavoriteItems, removeFavoriteItems } from '@/store/reducer/FavoriteSlice';
import { Link } from 'react-router-dom';
import leftArrow from '@/assets/images/icons/leftArrow.png'
import rightArrow from '@/assets/images/icons/rightArrow.png'

const Interesting = ({ product }) => {
    const dispatch = useDispatch()
    const { sneakers, clothes, accessories } = useSelector(state => state.cards)
    const { favoriteItems } = useSelector(state => state.favoriteItems)
    const [currentPage, setCurrentPage] = useState(1);
    let interestingProducts = []

    useEffect(() => {
        dispatch(fetchCardFromServer())
    }, dispatch)


      let productArray = [];
      if (sneakers.find(item => item.id === product.id)) {
          productArray = sneakers;
      } else if (clothes.find(item => item.id === product.id)) {
          productArray = clothes;
      } else if (accessories.find(item => item.id === product.id)) {
          productArray = accessories;
      }
  
      if (productArray.length > 0) {
          interestingProducts = productArray.filter(item => item.id !== product.id);
      }

    const handleNextPage = () => {
        const totalPages = Math.ceil(productArray.length / 4)
        setCurrentPage((currentPage + totalPages + 1) % totalPages)
        
    };

    const handlePrevPage = () => {
        const totalPages = Math.ceil(productArray.length / 4)
        setCurrentPage((currentPage + totalPages - 1) % totalPages);
    };

    const isFavorite = (itemId) => favoriteItems.some(item => item.id === itemId)

    const handleToggleFavorite = (itemId) => {
        if(isFavorite(itemId)) {
            dispatch(removeFavoriteItems(itemId))
        } else {
            const item = interestingProducts.find(item => item.id === itemId)
            if(item) {
                dispatch(addFavoriteItems(item))
            }
        }
    }

    return (
        <div className='w-full relative'>
            <div className='flex items-center justify-center mb-20'>
                {interestingProducts.slice(currentPage * 4, currentPage * 4 + 4).map(interestingProduct => (
                    <div key={interestingProduct.id}
                    className='flex flex-col items-start justify-start mr-7'
                    style={{maxWidth: '318px'}}
                    >
                        <div className='relative'>
                                <img src={interestingProduct.image} 
                                style={{height: '318px', width: '318px'}}
                                alt="" 
                                />
                                 <img src={isFavorite(interestingProduct.id) ? interestingProduct.yellowStar : interestingProduct.star}
                                onClick={() => handleToggleFavorite(interestingProduct.id)}
                                className='absolute right-0 top-0 cursor-pointer' 
                                style={{height: '19px', width: '18px'}}
                                alt="" 
                                />
                            </div>
                        <Link to={`/product/${interestingProduct.id}`}><h2 className='text-lg font-bold overflow-hidden truncate w-64'>{interestingProduct.name}</h2></Link>
                        <p className='text-sm'>{interestingProduct.price} $</p>
                    </div>
                ))}
                <div 
                    onClick={() => handlePrevPage(productArray)}   
                    className='absolute -left-5 w-8 h-8 rounded-full 
                    bg-white flex items-center justify-center cursor-pointer'
                    style={{marginRight: '15px'}}
                    >
                        <img src={leftArrow}
                        alt=""
                        className='w-3 h-3'
                        />
                </div>
                <div 
                    onClick={() => handleNextPage(productArray)}   
                    className='absolute -right-5 w-8 h-8 rounded-full 
                    bg-white flex items-center justify-center cursor-pointer'
                    style={{marginRight: '15px'}}
                    >
                        <img src={rightArrow}
                        alt=""
                        className='w-3 h-3'
                        />
                </div>
            </div>
        </div>
    );
}

export default Interesting;
