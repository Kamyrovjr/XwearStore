import { configureStore } from '@reduxjs/toolkit'
import photosSlice from '../reducer/PhotosSlice'
import cardFromApiSlice from '../reducer/CardFromApiSlice'
import searchSlice from '../reducer/SearchSlice'
import AuthSlice from '../reducer/AuthSlice'
import CartSlice from '../reducer/CartSlice'
import FavoriteSlice from '../reducer/FavoriteSlice'
import myOrdersSlice from '../reducer/MyOrdersSlice'

export const store = configureStore({
    reducer: {
        photos: photosSlice,
        cards: cardFromApiSlice,
        search: searchSlice,
        auth: AuthSlice,
        cartItems: CartSlice,
        favoriteItems: FavoriteSlice,
        myOrders: myOrdersSlice
    }
})