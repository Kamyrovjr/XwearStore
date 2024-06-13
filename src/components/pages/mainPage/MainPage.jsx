import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardFromServer, nextPage, prevPage } from '@/store/reducer/CardFromApiSlice'
import { addFavoriteItems, removeFavoriteItems } from '@/store/reducer/FavoriteSlice'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/utils/Routes';
import Gallery from './ui/Gallery';
import rightArrow  from '@/assets/images/icons/rightArrow.png'
import leftArrow  from '@/assets/images/icons/leftArrow.png'
import AboutStore from './ui/AboutStore';
import OurBlog from './ui/OurBlog';

const MainPage = () => {
    const dispatch = useDispatch();
    const { sneakers, clothes, accessories, status, error, sneakersCurrentPage, clothesCurrentPage, accessoriesCurrentPage } = useSelector((state) => state.cards);
    const { favoriteItems } = useSelector(state => state.favoriteItems)

    useEffect(() => {
        dispatch(fetchCardFromServer());
    }, [dispatch]);

    const handleNextPage = (block) => {
        dispatch(nextPage({ block }));
    };

    const handlePrevPage = (block) => {
        dispatch(prevPage({ block }));
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const isFavorite = (itemId) => favoriteItems.some(item => item.id === itemId);

    const handleToggleFavorite = (itemId) => {
        if (isFavorite(itemId)) {
            dispatch(removeFavoriteItems(itemId));
        } else {
            const item = sneakers.find(sneaker => sneaker.id === itemId) ||
                        clothes.find(cloth => cloth.id === itemId) ||
                        accessories.find(accessory => accessory.id === itemId);
            if (item) {
                dispatch(addFavoriteItems(item));
            }
        }
    };

    console.log('favoriteItem', favoriteItems)

    return (
        <div className='flex flex-col items-center justify-center relative' style={{ marginBottom: '80px'}}>
            <Gallery />
            <div style={{minWidth: '1541px', marginBottom: '200px'}}>
                <div className='flex justify-between mb-11 w-full'>
                    <div>
                        <h2 className='font-black text-3xl'>ОБУВЬ</h2>
                    </div>
                    <Link to={ROUTES.CATALOGSHOES}>
                        <div className='flex items-center underline decoration-2'>
                            <p className='font-extrabold text-sm mr-2.5'>БОЛЬШЕ ТОВАРОВ</p>
                            <img src={rightArrow}
                            className='w-3 h-3'
                            alt="" 
                            />
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center mb-20 relative'>
                    {sneakers?.slice(sneakersCurrentPage * 4, sneakersCurrentPage * 4 + 4).map(sneaker =>(
                        <div key={sneaker.id}
                        className='flex flex-col items-start justify-start mr-7'
                        style={{maxWidth: '318px'}}
                        >
                            <div className='relative'>
                                <img src={sneaker.image} 
                                style={{height: '318px', width: '318px'}}
                                alt="" 
                                />
                                 <img src={isFavorite(sneaker.id) ? sneaker.yellowStar : sneaker.star}
                                 onClick={() => {
                                    handleToggleFavorite(sneaker.id);
                                }}
                                className='absolute right-0 top-0 cursor-pointer' 
                                style={{height: '19px', width: '18px'}}
                                alt="" 
                                />
                            </div>
                            <Link to={`/product/${sneaker.id}`}><h2 className='text-lg font-bold overflow-hidden truncate w-64'>{sneaker.name}</h2></Link>
                            <p className='text-sm'>{sneaker.price} $</p>
                        </div>
                    ))}
                    <div 
                        onClick={() => handleNextPage('sneakers')}   
                        className='absolute left-0 w-8 h-8 rounded-full 
                        bg-white flex items-center justify-center'
                        style={{marginRight: '15px'}}
                        >
                            <img src={leftArrow}
                            alt=""
                            className='w-3 h-3'
                            />
                    </div>
                    <div 
                        onClick={() => handlePrevPage('sneakers')}   
                        className='absolute right-0 w-8 h-8 rounded-full 
                        bg-white flex items-center justify-center'
                        style={{marginRight: '15px'}}
                        >
                            <img src={rightArrow}
                            alt=""
                            className='w-3 h-3'
                            />
                    </div>
                </div>
                <div className='flex justify-between mb-11 w-full'>
                    <div>
                        <h2 className='font-black text-3xl'>ОДЕЖДА</h2>
                    </div>
                    <Link to={ROUTES.CATALOGCLOTHES}>
                        <div className='flex items-center underline decoration-2'>
                            <p className='font-extrabold text-sm mr-2.5'>БОЛЬШЕ ТОВАРОВ</p>
                            <img src={rightArrow}
                            className='w-3 h-3'
                            alt="" 
                            />
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center mb-20 relative'>
                    {clothes?.slice(clothesCurrentPage * 4, clothesCurrentPage * 4 + 4).map(data =>(
                        <div key={data.id}
                        className='flex flex-col items-start justify-start mr-7'
                        style={{maxWidth: '318px'}}
                        >
                            <div className='relative'>
                                <img src={data.image} 
                                style={{height: '318px', width: '318px'}}
                                alt="" 
                                />
                                 <img src={isFavorite(data.id) ? data.yellowStar : data.star}
                                onClick={() => handleToggleFavorite(data.id)}
                                className='absolute right-0 top-0 cursor-pointer' 
                                style={{height: '19px', width: '18px'}}
                                alt="" 
                                />
                            </div>
                            <Link to={`/product/${data.id}`}><h2 className='text-lg font-bold overflow-hidden truncate w-64'>{data.name}</h2></Link>
                            <p className='text-sm'>{data.price} $</p>
                        </div>
                    ))}
                    <div 
                        onClick={() => handleNextPage('clothes')}   
                        className='absolute left-0 w-8 h-8 rounded-full 
                        bg-white flex items-center justify-center'
                        style={{marginRight: '15px'}}
                        >
                            <img src={leftArrow}
                            alt=""
                            className='w-3 h-3'
                            />
                    </div>
                    <div 
                        onClick={() => handlePrevPage('clothes')}   
                        className='absolute right-0 w-8 h-8 rounded-full 
                        bg-white flex items-center justify-center'
                        style={{marginRight: '15px'}}
                        >
                            <img src={rightArrow}
                            alt=""
                            className='w-3 h-3'
                            />
                    </div>
                </div>
                <div className='flex justify-between mb-11 w-full'>
                    <div>
                        <h2 className='font-black text-3xl'>АКСЕССУАРЫ</h2>
                    </div>
                    <Link to={ROUTES.CATALOGACCESSORIES}>
                        <div className='flex items-center underline decoration-2'>
                            <p className='font-extrabold text-sm mr-2.5'>БОЛЬШЕ ТОВАРОВ</p>
                            <img src={rightArrow}
                            className='w-3 h-3'
                            alt="" 
                            />
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center relative'>
                    {accessories?.slice(accessoriesCurrentPage * 4, accessoriesCurrentPage * 4 + 4).map(accessory =>(
                        <div key={accessory.id}
                        className='flex flex-col items-start justify-start mr-7'
                        style={{maxWidth: '318px'}}
                        >
                            <div className='relative'>
                                <img src={accessory.image} 
                                style={{height: '318px', width: '318px'}}
                                alt="" 
                                />
                                 <img src={isFavorite(accessory.id) ? accessory.yellowStar : accessory.star}
                                onClick={() => handleToggleFavorite(accessory.id)}
                                className='absolute right-0 top-0 cursor-pointer' 
                                style={{height: '19px', width: '18px'}}
                                alt="" 
                                />
                            </div>
                            <Link to={`/product/${accessory.id}`}><h2 className='text-lg font-bold overflow-hidden truncate w-64'>{accessory.name}</h2></Link>
                            <p className='text-sm'>{accessory.price} $</p>
                        </div>
                    ))}
                    <div 
                        onClick={() => handleNextPage('accessories')}   
                        className='absolute left-0 w-8 h-8 rounded-full 
                        bg-white flex items-center justify-center'
                        style={{marginRight: '15px'}}
                        >
                            <img src={leftArrow}
                            alt=""
                            className='w-3 h-3'
                            />
                    </div>
                    <div 
                        onClick={() => handlePrevPage('accessories')}   
                        className='absolute right-0 w-8 h-8 rounded-full 
                        bg-white flex items-center justify-center'
                        style={{marginRight: '15px'}}
                        >
                            <img src={rightArrow}
                            alt=""
                            className='w-3 h-3'
                            />
                    </div>
                </div>
            </div>
            <AboutStore />
            <OurBlog />
        </div>
    );
}

export default MainPage;
