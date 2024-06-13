import React, { useState, useEffect } from 'react';
import { ROUTES } from '@/utils/Routes'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SearchBar from '@/components/pages/mainPage/features/SearchBar';
import ClothesDropdown from './ClothesDropdown';
import ShoesDropdown from './ShoesDropdown';
import AccessoriesDropdown from './AccessoriesDropdown';
import InformationDropdown from './informationDropdown';
import logo from '@/assets/images/logo/logo.svg'
import favorite from '@/assets/images/icons/favorite.svg'
import cart from '@/assets/images/icons/cart.svg'
import profile from '@/assets/images/icons/profile.svg'
import downArrow from '@/assets/images/icons/downArrow.png'
import searchIcon from '@/assets/images/icons/SearchIcon.png'
import LoginModal from './buttons/LoginModal';

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.auth.isLoggedIn)
    const { cartItems } = useSelector(state => state.cartItems)
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isClothesDropVisible, setisClothesDropVisible] = useState(false);
    const [isShoesDropVisible, setisShoesDropVisible] = useState(false);
    const [isAccessoriesDropVisible, setisAccessoriesDropVisible] = useState(false);
    const [isInformatiosDropVisible, setisInformatiosDropVisible] = useState(false);
    const [isAccountActive, setIsAccountActive] = useState(false)

    useEffect(() => {
        setIsSearchVisible(false);
        setisClothesDropVisible(false);
        setisShoesDropVisible(false);
        setisAccessoriesDropVisible(false);
        setisInformatiosDropVisible(false);
        setIsAccountActive(false)
    }, [location.pathname]);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    }

    const toggleClothesDropDown = () => {
        setisClothesDropVisible(!isClothesDropVisible);
    }

    const toggleShoesDropDown = () => {
        setisShoesDropVisible(!isShoesDropVisible);
    }

    const toggleAccessoriesDropDown = () => {
        setisAccessoriesDropVisible(!isAccessoriesDropVisible);
    }

    const toggleInformationDropDown = () => {
        setisInformatiosDropVisible(!isInformatiosDropVisible);
    }

    const handleProfileClick = () => {
        if (isAuthenticated) {
            navigate(ROUTES.PROFILEPAGE);
        } else {
            setIsAccountActive(prevState => !prevState)
        }
    }

    return (
        <div className='bg-black p-6 px-64' style={{marginBottom: '49px'}}>
            <div className='flex items-center justify-center' style={{minWidth: '1362px'}}>
                <Link to={ROUTES.HOME}>
                    <div>
                        <img src={logo} 
                        alt="" 
                        className='w-83 h-34' style={{ marginRight: '113px' }}/>
                    </div>
                </Link>
                <div className={`flex items-center justify-center ${isSearchVisible ? 'hidden' : ''}`} style={{ marginRight: '100px' }}>
                    <div className='flex items-center relative' style={{marginRight: '45px'}}>
                            <p className='font-extrabold text-sm text-white mr-2'>Одежда</p>
                            {isClothesDropVisible && <ClothesDropdown />}
                        <img src={downArrow}
                        onClick={() => toggleClothesDropDown()}
                        className='w-3 h-3 mt-1 cursor-pointer'
                        alt="" 
                        />
                    </div>
                    <div className='flex items-center relative' style={{marginRight: '45px'}}>
                        <p className='font-extrabold text-sm  text-white mr-2'>Обувь</p>
                        {isShoesDropVisible && <ShoesDropdown />}
                        <img src={downArrow}
                        onClick={() => toggleShoesDropDown()}
                        className='w-3 h-3 mt-1 cursor-pointer'
                        alt="" 
                        />
                    </div>
                    <div className='flex items-center relative' style={{marginRight: '45px'}}>
                        <p className='font-extrabold text-sm  text-white mr-2'>Аксессуары</p>
                        {isAccessoriesDropVisible && <AccessoriesDropdown />}
                        <img src={downArrow}
                        onClick={() => toggleAccessoriesDropDown()}
                        className='w-3 h-3 mt-1 cursor-pointer'
                        alt="" 
                        />
                    </div>
                    <div className='flex items-center relative'>
                        <p className='font-extrabold text-sm text-white mr-2'>Информация</p>
                        {isInformatiosDropVisible && <InformationDropdown />}
                        <img src={downArrow}
                        onClick={() => toggleInformationDropDown()}
                        className='w-3 h-3 mt-1 cursor-pointer'
                        alt="" 
                        />
                    </div>
                </div>
                {isSearchVisible && <SearchBar toggleSearch={toggleSearch}/>}
                <div className='flex items-center justify-center relative'>
                    <div onClick={toggleSearch}>
                        <img src={searchIcon}
                        className={`flex items-center justify-center w-17 h-17 mr-8 ${isSearchVisible ? 'hidden' : ''}`}
                        alt="" 
                        />
                    </div>
                    <Link to={ROUTES.FAVORITE}>
                        <div>
                            <img src={favorite}
                            className='w-17 h-17 mr-8'
                            alt="" 
                            />
                        </div>
                    </Link>
                    <div>
                        <img src={profile} 
                        className='w-17 h-17 mr-8 cursor-pointer'
                        onClick={handleProfileClick}
                        alt="" 
                        />
                    </div>
                    {isAccountActive && <LoginModal />}
                    <div className='flex items-center'>
                        <Link to={ROUTES.CART}>  
                            <div>
                                <img src={cart} 
                                className='w-17 h-17 mr-2'
                                alt="" 
                                />
                            </div>
                        </Link>
                        <div className="rounded-full bg-blue-300 text-white text-sm font-bold flex items-center justify-center" style={{ width: '18px', height: '18px'}}>
                            {cartItems.length}
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default Header;