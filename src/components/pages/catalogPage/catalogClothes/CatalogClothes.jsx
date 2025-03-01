import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardFromServer } from '@/store/reducer/CardFromApiSlice';
import { addFavoriteItems, removeFavoriteItems } from '@/store/reducer/FavoriteSlice';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import CategoryFilter from './filters/CategoriesFilter';
import PriceFilters from './filters/PriceFilters';
import SizesFilter from './filters/SizesFilter';
import BrandsFilter from './filters/BrandsFilter';
import ModelsFilter from './filters/ModelsFilter';
import casual from '@/assets/images/blog/casual.png'
import SortingClothes from './filters/SortingClothes';

const CatalogClothes = () => {
    const dispatch = useDispatch();
    const { clothes } = useSelector(state => state.cards);
    const { favoriteItems } = useSelector(state => state.favoriteItems)
    const [filteredClothes, setFilteredClothes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 });
    const [checkedSize, setCheckedSize] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedModels, setSelectedModels] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [checkedPage, setcheckedPage] = useState([]);
    const clothesPerPage = 21;
    
    const resetFilters = () => {
        setSelectedCategory([]);
        setPriceFilter({ min: 0, max: 1000 });
        setCheckedSize([]);
        setSelectedBrands([]);
        setSelectedModels([]);
    };

    useEffect(() => {
        dispatch(fetchCardFromServer());
    }, [dispatch]);

    useEffect(() => {
        const filtered = clothes.filter(clothes => 
            (selectedCategory.length === 0 || selectedCategory.includes(clothes.category)) && 
            (!checkedSize.length || checkedSize.some(size => Array.isArray(clothes.size) && clothes.size.some(s => s.value === size.value))) &&
            (!selectedModels.length || selectedModels.includes(clothes.model)) &&
            (!selectedBrands.length || selectedBrands.includes(clothes.brand)) &&
            (clothes.price >= priceFilter.min && clothes.price <= priceFilter.max)
        );
        setFilteredClothes(filtered);
    }, [clothes, selectedCategory, priceFilter, checkedSize, selectedBrands, selectedModels]);

    useEffect(() => {
        const queryParams = queryString.parse(location.search);
        const categoryParam = queryParams.category;
        if (categoryParam) {
            setSelectedCategory([categoryParam]);
        }
    }, []);

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

    const totalPages = Math.ceil(filteredClothes.length / clothesPerPage); 

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
            const item = clothes.find(cloth => cloth.id === itemId)
            if (item) {
                dispatch(addFavoriteItems(item));
            }
        }
    };

    
    const sortClothes = (order) => {
        const sortedClothes = [...filteredClothes]
        
        if(order === 'ascending') {
            sortedClothes.sort((a, b) => a.price - b.price)
        } else {
            sortedClothes.sort((a, b) => b.price - a.price)
        }

        setFilteredClothes(sortedClothes)
    }

    return (
        <div className='flex flex-col items-center w-full'>
            <div className='flex items-end justify-end w-full mb-5'>
                <SortingClothes sortClothes={sortClothes}/>
            </div> 
            <div className='flex items-start justify-center mb-20' style={{ maxWidth: '1362px' }}>
                <div className='flex flex-col items-center justify-start mr-8' style={{maxWidth: '318px'}}>
                    <CategoryFilter clothes={clothes} onSelectedCategories={handleSelectedCategory} />
                    <PriceFilters min={priceFilter.min} max={priceFilter.max} onMinChange={handleMinChange} onMaxChange={handleMaxChange} />
                    <SizesFilter checkedSize={checkedSize} setCheckedSize={setCheckedSize} clothes={clothes}/>
                    <BrandsFilter onSelectedBrands={handleSelectedBrands} clothes={clothes}/>
                    <ModelsFilter onSelectedModels={handleSelectedModels} clothes={clothes}/>
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
                {filteredClothes.length > 0 ? (
                    filteredClothes.slice((currentPage - 1) * clothesPerPage, currentPage * clothesPerPage).map(clothes => (
                        <div key={clothes.id}
                            className='flex flex-col items-start'
                            style={{ mixWidth: '318px', marginBottom: "47px" }}
                        >
                             <div className='relative'>
                                <img src={clothes.image} 
                                style={{height: '318px', width: '318px'}}
                                alt="" 
                                />
                                 <img src={isFavorite(clothes.id) ? clothes.yellowStar : clothes.star}
                                onClick={() => handleToggleFavorite(clothes.id)}
                                className='absolute right-0 top-0 cursor-pointer' 
                                style={{height: '19px', width: '18px'}}
                                alt="" 
                                />
                            </div>
                            <Link to={`/product/${clothes.id}`}><h2 className='text-lg font-bold overflow-hidden truncate w-64'>{clothes.name}</h2></Link>
                            <p className='text-sm'>{clothes.price} $</p>
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

export default CatalogClothes;