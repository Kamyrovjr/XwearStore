import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { ROUTES } from '../../../utils/Routes';

const SearchResultPage = () => {
    const dispatch = useDispatch();
    const { sneakers, clothes, accessories } = useSelector(state => state.cards);

    const [filteredClothes, setFilteredClothes] = useState([]);
    const [filteredSneakers, setFilteredSneakers] = useState([]);
    const [filteredAccessories, setFilteredAccessories] = useState([]);

    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const searchQuery = queryParams.search;

    useEffect(() => {
        if (searchQuery) {
            const clothesFiltered = clothes.filter(clothes =>
                clothes.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                clothes.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                clothes.model.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredClothes(clothesFiltered);

            const sneakersFiltered = sneakers.filter(sneaker =>
                sneaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                sneaker.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                sneaker.model.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredSneakers(sneakersFiltered);

            const accessoriesFiltered = accessories.filter(accessories =>
                accessories.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                accessories.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                accessories.model.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredAccessories(accessoriesFiltered);
        }
    }, [dispatch, searchQuery, clothes, sneakers, accessories]);

    return (
        <div className='flex items-start justify-center mb-20' style={{ maxWidth: '1362px' }}>
            {searchQuery && (
                <div className='flex flex-col items-start mr-8' style={{ maxWidth: '318px' }}>
                    <div className='mb-3'>
                        <h2 className='font-bold text-sm'>
                            {searchQuery && (filteredClothes.length > 0 || filteredSneakers.length > 0 || filteredAccessories.length > 0)  ? searchQuery.toUpperCase() : ''}
                        </h2>
                    </div>
                    {filteredClothes.length > 0 && (
                        <div className='mb-3'>
                            <h3 className='font-semibold text-sm'>Одежда({filteredClothes.length})</h3>
                        </div>
                    )}
                    {filteredSneakers.length > 0 && (
                        <div className='mb-3'>
                            <h3 className='font-semibold text-sm'>Обувь({filteredSneakers.length})</h3>
                        </div>
                    )}
                    {filteredAccessories.length > 0 && (
                        <div>
                            <h3 className='font-semibold text-sm cursor-pointer'>Аксессуары({filteredAccessories.length})</h3>
                        </div>
                    )}
                </div>
            )}
            <div className='flex items-center flex-wrap justify-between' style={{ minWidth: '318px' }}>
                {searchQuery && (
                    <>
                        {(filteredSneakers.length > 0 || filteredClothes.length > 0 || filteredAccessories.length > 0) ? (
                            <>
                                {filteredSneakers.map(sneaker => (
                                    <Link to={`/product/${sneaker.id}`}>
                                        <div key={sneaker.id}
                                            className='flex flex-col items-start'
                                            style={{ mixWidth: '318px', marginBottom: "47px" }}
                                        >
                                            <img src={sneaker.image}
                                                style={{ height: '318px', width: '318px' }}
                                                alt=""
                                            />
                                            <h2 className='text-lg font-bold overflow-hidden truncate w-64'>{sneaker.name}</h2>
                                            <p className='text-sm'>{sneaker.price} $</p>
                                        </div>
                                    </Link>  
                                ))}
                                {filteredClothes.map(clothes => (
                                    <Link to={`/product/${clothes.id}`}>
                                        <div key={clothes.id}
                                            className='flex flex-col items-start'
                                            style={{ mixWidth: '318px', marginBottom: "47px" }}
                                        >
                                            <img src={clothes.image}
                                                style={{ height: '318px', width: '318px' }}
                                                alt=""
                                            />
                                            <h2 className='text-lg font-bold overflow-hidden truncate w-64'>{clothes.name}</h2>
                                            <p className='text-sm'>{clothes.price} $</p>
                                        </div>
                                    </Link>
                                ))}
                                {filteredAccessories.map(accessories => (
                                    <Link to={`/product/${accessories.id}`}> 
                                        <div key={accessories.id}
                                            className='flex flex-col items-start'
                                            style={{ mixWidth: '318px', marginBottom: "47px" }}
                                        >
                                            <img src={accessories.image}
                                                style={{ height: '318px', width: '318px' }}
                                                alt=""
                                            />
                                            <h2 className='text-lg font-bold overflow-hidden truncate w-64'>{accessories.name}</h2>
                                            <p className='text-sm'>{accessories.price} $</p>
                                        </div>
                                    </Link>
                                ))}
                            </>
                        ) : (
                            <div>Ничего не найдено по запросу "{searchQuery}"</div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default SearchResultPage;
