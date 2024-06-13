import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    isLoggedIn: false,
    currentUser: null,
    authToken: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true
            state.currentUser = action.payload
            state.authToken = action.payload
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.currentUser = null
            state.authToken = null 
        },
        register: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
            state.authToken = action.payload;
        },
        changePassword: (state, action) => {
            const { currentPassword, newPassword, confirmPassword } = action.payload;


            if (newPassword !== confirmPassword) {
                return;
            }
            state.currentUser.password = newPassword;
        },
        updateUserData(state, action) {
            state.currentUser = action.payload;
        }
    }
})

export const { login, logout, register, changePassword, updateUserData } = authSlice.actions

export default authSlice.reducer;