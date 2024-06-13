import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    cartItems: []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemCart: (state, action) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            if(existingItem) {
                existingItem.quantity++
            } else {
                state.cartItems.push({...newItem, quantity: 1})
            }
        },
        removeItemCart: (state, action) => {
            const itemIdToRemove = action.payload
            state.cartItems = state.cartItems.filter(item => item.id  !== itemIdToRemove)
        },
        removeAllItemsCart: (state) => {
            state.cartItems = []
        },
        incrementItem: (state, action) => {
            const itemIdToIncrement = action.payload;
            const itemToIncrement = state.cartItems.find(item => item.id === itemIdToIncrement);
            if (itemToIncrement) {
                itemToIncrement.quantity++;
            }
        },
        decrementItem: (state, action) => {
            const itemIdToDecrement = action.payload;
            const itemToDecrement = state.cartItems.find(item => item.id === itemIdToDecrement);
            if (itemToDecrement && itemToDecrement.quantity > 0) {
                itemToDecrement.quantity--;
            }
        },
    }
})

export const { addItemCart, removeItemCart, incrementItem, decrementItem, removeAllItemsCart } = CartSlice.actions
export default CartSlice.reducer