import React from 'react';
import { Routes, Route } from 'react-router-dom'
import MainPage from '@/components/pages/mainPage/MainPage';
import CartElements from '@/components/pages/cartComponents/CartElements';
import FavoriteContents from '@/components/pages/favoriteComponents/FavoriteContents';
import CatalogShoes from '@/components/pages/catalogPage/catalogShoes/CatalogShoes';
import CatalogClothes from '../pages/catalogPage/catalogClothes/CatalogClothes';
import CatalogAccessories from '../pages/catalogPage/catalogAccessories/CatalogAccessories';
import SearchResultPage from '../pages/catalogPage/SearchResultPage';
import ProductPage from '../pages/productPage/ProductPage';
import LoginPage from '../pages/loginPage/LoginPage';
import ProfilePage from '../pages/profilePage/ProfilePage';
import Contacts from '../pages/infoComponents/contactsElements/Contacts';
import FAQ from '../pages/infoComponents/faqElements/FAQ';
import PlaceOnOrder from '../pages/cartComponents/placeElement/PlaceOnOrder';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/cart' element={<CartElements />}/>
            <Route path='/favorite' element={<FavoriteContents />}/>
            <Route path='/catalog/shoes' element={<CatalogShoes />}/>
            <Route path='/catalog/clothes' element={<CatalogClothes />}/>
            <Route path='/catalog/accessories' element={<CatalogAccessories />}/>
            <Route path='/catalog/all' element={<SearchResultPage />} />
            <Route path='/product/:id' element={<ProductPage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/profile' element={<ProfilePage />}/>
            <Route path='/contacts' element={<Contacts />}/>
            <Route path='/faq' element={<FAQ />}/>
            <Route path='/order' element={<PlaceOnOrder />}/>
        </Routes>
    );
}

