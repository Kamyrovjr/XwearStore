import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    myOrders: []
}

const myOrdersSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrdersItem: (state, action) => {
            const items = action.payload;
            return {
                ...state,
                myOrders: [...state.myOrders, ...items]
            };
        }
    }
})

export const { addOrdersItem } = myOrdersSlice.actions
export default myOrdersSlice.reducer