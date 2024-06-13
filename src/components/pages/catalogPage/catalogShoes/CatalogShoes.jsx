import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardFromServer } from '@/store/reducer/CardFromApiSlice';
import { addFavoriteItems, removeFavoriteItems } from '@/store/reducer/FavoriteSlice';
import queryString from 'query-string';
import CategoryFilter from './filters/CategoriesFilter';
import PriceFilters from './filters/PriceFilters';
import SizesFilter from './filters/SizesFilter';
import BrandsFilter from './filters/BrandsFilter';
import ModelsFilter from './filters/ModelsFilter';
import casual from '@/assets/images/blog/casual.png'
import { Link, useParams } from 'react-router-dom';
import SortingShoes from './filters/SortingShoes';

const CatalogShoes = () => {
    const dispatch = useDispatch();
    const { sneakers } = useSelector((state) => state.cards);
    const { id } = useParams
    const { favoriteItems } = useSelector(state => state.favoriteItems)
    const [filteredSneakers, setFilteredSneakers] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 });
    const [checkedSize, setCheckedSize] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedModels, setSelectedModels] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [checkedPage, setcheckedPage] = useState([]);
    const sneakersPerPage = 21; 

    const resetFilters = () => {
        setSelectedCategory([]);
        setPriceFilter({ min: 0, max: 1000 });
        setCheckedSize([]);
        setSelectedBrands([]);
        setSelectedModels([]);
    };

    useEffect(() => {
        if (id) {
            dispatch(fetchCardFromServer(id))
        }
    }, [dispatch, id])

    useEffect(() => {
        dispatch(fetchCardFromServer());
    }, [dispatch]);

    useEffect(() => {
        const filtered = sneakers.filter(sneaker =>
            (selectedCategory.length === 0 || selectedCategory.includes(sneaker.category)) && 
            (!checkedSize.length || checkedSize.some(size => Array.isArray(sneaker.size) && sneaker.size.some(s => s.value === size.value))) &&
            (!selectedModels.length || selectedModels.includes(sneaker.model)) &&
            (!selectedBrands.length || selectedBrands.includes(sneaker.brand)) &&
            (sneaker.price >= priceFilter.min && sneaker.price <= priceFilter.max)
        );
        setFilteredSneakers(filtered);
    }, [sneakers, selectedCategory, priceFilter, checkedSize, selectedBrands, selectedModels]);

    useEffect(() => {
        const queryParams = queryString.parse(location.search);
        const categoryParam = queryParams.category;
        if (categoryParam) {
            setSelectedCategory([categoryParam]);
        }
    }, [])

    const handleSelectedCategory = (category) => {
        setSelectedCategory(prevSelectedCategory => {
            if (prevSelectedCategory.includes(category)) {
                return prevSelectedCategory.filter(cat => cat !== category);
            } else {
                return [...prevSelectedCategory, category];
            }
        });
    };

    const handleMinChange = (min) => {
        dispatch(setPriceFilter({ min, max: priceFilter.max }));
    }

    const handleMaxChange = (max) => {
        dispatch(setPriceFilter({ min: priceFilter.min, max }));
    }

    const handleSelectedBrands = (brand) => {
        setSelectedBrands(prevSelectedBrands => {
            if (prevSelectedBrands.includes(brand)) {
                return prevSelectedBrands.filter(b => b !== brand);
            } else {
                return [...prevSelectedBrands, brand];
            }
        });
    }

    const handleSelectedModels = (model) => {
        setSelectedModels(prevSelectedModels => {
            if (prevSelectedModels.includes(model)) {
                return prevSelectedModels.filter(m => m !== model);
            } else {
                return [...prevSelectedModels, model];
            }
        });
    };

    const totalPages = Math.ceil(filteredSneakers.length / sneakersPerPage); 

    const changePage = (page) => {
        setCurrentPage(page);
        setcheckedPage([page]);
    }

    const handlePageChange = (currentPage) => {
        if(checkedPage.includes(currentPage)) {
            setcheckedPage(checkedPage.filter(item => item !== currentPage))
        } else {
            setcheckedPage([...checkedPage, currentPage])
        }
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

    const sortSneakers = (order) => {
        const sortedSneakers = [...filteredSneakers]
        
        if(order === 'ascending') {
            sortedSneakers.sort((a, b) => a.price - b.price)
        } else {
            sortedSneakers.sort((a, b) => b.price - a.price)
        }

        setFilteredSneakers(sortedSneakers)
    }

    return (
        <div className='flex flex-col items-center w-full'> 
            <div className='flex items-end justify-end w-full mb-5'>
                <SortingShoes sortSneakers={sortSneakers}/>
            </div> 
            <div className='flex items-start justify-center mb-20' style={{ maxWidth: '1362px' }}>

                <div className='flex flex-col items-center justify-start mr-8' style={{maxWidth: '318px'}}>
                    <CategoryFilter sneakers={sneakers} onSelectedCategories={handleSelectedCategory} />
                    <PriceFilters min={priceFilter.min} max={priceFilter.max} onMinChange={handleMinChange} onMaxChange={handleMaxChange} />
                    <SizesFilter checkedSize={checkedSize} setCheckedSize={setCheckedSize} sneakers={sneakers}/>
                    <BrandsFilter onSelectedBrands={handleSelectedBrands} sneakers={sneakers}/>
                    <ModelsFilter onSelectedModels={handleSelectedModels} sneakers={sneakers}/>
                    <button 
                    onClick={resetFilters}
                    className='rounded-lg border border-gray-300 p-6 gap-5 w-full font-extrabold text-xs mb-8'>
                        X СБРОСИТЬ ВСЕ ФИЛЬТРЫ
                    </button>
                    <div>
                        <img src={casual}
                        style={{minWidth: '318px', minHeight: '535px'}}
                        alt="" 
                        />
                    </div>
                </div>
                    <div className='flex items-center flex-wrap justify-between' style={{ minWidth: '318px' }}>
                    {filteredSneakers.length > 0 ? (
                        filteredSneakers.slice((currentPage - 1) * sneakersPerPage, currentPage * sneakersPerPage).map(sneaker => (
                            <div key={sneaker.id}
                                className='flex flex-col items-start'
                                style={{ minWidth: '318px', marginBottom: "47px" }}
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
                        ))
                    ) : (
                        <div>Товар не найден</div>
                    )}
                    </div>
            </div>
            <div>
                {Array.from({ length: totalPages }, (_, i) => {
                    const page = i + 1;
                    const isActive = checkedPage.includes(page);
                    return (
                        <button 
                            key={i} 
                            onClick={() => {
                                handlePageChange(page);
                                changePage(page);
                            }} 
                            className='font-semibold text-sm cursor-pointer'
                            style={{padding: '13px 19px', backgroundColor: isActive ? '#49D0FF' : ''}}
                        >
                            {page}
                        </button>
                    )
                })}
            </div>
        </div>
    );
}

export default CatalogShoes;