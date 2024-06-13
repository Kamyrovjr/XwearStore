import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    search: '',

}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
         handlesearchQuary: (state, action) => {
            state.search = action.payload
         }
    }
})

export const { handlesearchQuary } = searchSlice.actions
export default searchSlice.reducer