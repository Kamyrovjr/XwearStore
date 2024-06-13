import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoriteItems: []
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavoriteItems: (state, action) => {
            const item = action.payload;
            state.favoriteItems.push(item);
        },
        removeFavoriteItems: (state, action) => {
            const itemIdToRemove = action.payload;
            state.favoriteItems = state.favoriteItems.filter(item => item.id !== itemIdToRemove)
        }
    }
})

export const { addFavoriteItems, removeFavoriteItems } = favoriteSlice.actions
export default favoriteSlice.reducer