import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCardFromServer } from '@/store/reducer/CardFromApiSlice';
import { addItemCart } from '@/store/reducer/CartSlice';
import rightArrow  from '@/assets/images/icons/rightArrow.png'
import Details from './ui/Details';
import Interesting from './ui/Interesting';

const ProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { sneakers, clothes, accessories } = useSelector(state => state.cards);
    const [loading, setLoading] = useState(true); 
    const [ActiveSizes, setActiveSizes] = useState({})
    const [selectedSize, setSelectedSize] = useState(false);
    const [selectedSizeActive, setselectedSizeActive] = useState('')

    useEffect(() => {
        dispatch(fetchCardFromServer(id))
            .then(() => setLoading(false)) 
            .catch(() => setLoading(false)); 
    }, [dispatch, id]);

    const handleButtomClickCart = () => {
        const selectedSizeObject = product.size.find(size => size.id === selectedSize);
        const productWithSize = { ...product, size: selectedSizeObject };
        if(selectedSize) {
            dispatch(addItemCart(productWithSize));
        } else {
            setselectedSizeActive('Выберете размер')
        }
    }

    console.log('ss', selectedSize)

    const findProductById = (productId) => {
        return sneakers.find(item => item.id == productId) ||
               clothes.find(item => item.id == productId) ||
               accessories.find(item => item.id == productId) ||
               null;
    };

    const product = findProductById(id);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>
    }

    
    const handleSizeClick = (sizeId) => {
        setActiveSizes(prevState => ({
            ...prevState,
            [sizeId]: !prevState[sizeId]
        }));
    
        if (selectedSize && selectedSize !== sizeId) {
            setActiveSizes(prevState => ({
                ...prevState,
                [selectedSize]: false
            }));
        }
    
        setSelectedSize(sizeId);
    };

    return (
        <>
            <div className='flex flex-col items-start justify-start'>
                <div className='flex items-center justify-start'>
                    <div>
                        <img src={product.image} 
                        style={{minWidth: '664px', maxHeight: '550px'}}
                        alt="product"
                        />
                    </div>
                    <div className='flex flex-col items-start' style={{maxWidth: '450px'}}>
                        <h2 className='font-black text-3xl text-wrap mb-3' style={{maxWidth: '665px'}}>{product.name}</h2>
                        <p className='font-semibold text-sm mb-3'>EU РАЗМЕРЫ :</p>
                        <div className='flex items-center flex-wrap w-full mb-7'>
                            {product.size?.map((size) => {
                                return ( 
                                    <button 
                                        key={size.id}
                                        onClick={() => handleSizeClick(size.id)}
                                        className='border rounded border-solid py-2 px-2.5 border-gray-200 mb-2.5 mr-2.5' 
                                        style={{minWidth: '82px', fontSize: '13px', color: 'black', backgroundColor: ActiveSizes[size.id] ?  "#49D0FF" : ''}}>
                                        {size.value}
                                    </button>
                                );
                            })}
                        </div>
                        <p className='font-semibold text-sm mb-3 text-green-400'>{!selectedSize ? selectedSizeActive : ''}</p>
                        <div className='flex items-center justify-start'>
                            <div className='flex flex-col items-start mr-6'>
                                <p className='text-sm'>Цена: {product.price}$</p>
                                {selectedSize && <p className='text-sm'>РАЗМЕР - {product.size.find(size => size.id === selectedSize).value}</p>}
                            </div>
                            <div  
                            className='relative rounded-5 bg-black flex item-center justify-center cursor-pointer' 
                            style={{padding: '23px 27px', minWidth: '251px', height: '66px'}}>
                                <span className='text-white text-xs font-extrabold' onClick={handleButtomClickCart}>ДОБАВИТЬ В КОРЗИНУ</span>
                                <div>
                                    <img src={rightArrow} alt="" className='w-3 h-3 absolute top-6 right-3'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Details product={product}/>
                <Interesting product={product} category={product.category}/>
            </div>
        </>
    );
}

export default ProductPage;
