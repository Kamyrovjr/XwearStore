import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handlesearchQuary } from '@/store/reducer/SearchSlice';
import { Link } from 'react-router-dom';
import searchIcon from '@/assets/images/icons/search.png';


const SearchBar = ({ toggleSearch }) => {
    const dispatch = useDispatch()
    const searchQuery = useSelector(state => state.search.search.toString());


    const handleSearch = (event) => {
        const query = event.target.value;
        dispatch(handlesearchQuary(query));
    };
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && searchQuery.trim() !== '') {
            dispatch(handlesearchQuary(searchQuery));
        }
    };

    return (
        <div className='border-b border-white border-opacity-20 relative' style={{minWidth: '900px', marginRight: '16px'}}>
            <form>
                <input
                type="text"
                className='bg-black w-full border-2 border-gray-300 rounded-full text-base outline-none transition duration-300 ease-in-out text-white'
                style={{paddingTop: '13px', paddingBottom: '13px', paddingLeft: '28px'}}
                onChange={handleSearch}
                placeholder='Поиск по названию'
                value={searchQuery} 
                />
                <Link to={`/catalog/all?search=${encodeURIComponent(searchQuery)}`}>
                    <button className='border-none'>
                        <img src={searchIcon} 
                        className="absolute right-3 top-1/2 transform -translate-y-1/2" 
                        alt="Search" 
                        onClick={toggleSearch}
                        onKeyDown={handleKeyDown}
                        style={{ width: '20px', height: '20px' }}
                        />
                    </button> 
                </Link>
            </form>
        </div>
    );
}

export default SearchBar;
