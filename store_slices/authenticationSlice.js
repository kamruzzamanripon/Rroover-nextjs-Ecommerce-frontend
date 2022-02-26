import { createSlice } from '@reduxjs/toolkit';
import { login, logout, registration } from './data_fetch/authenticationDataFetch';


const initialState = {
    authLoading: false,
    userInfo:{}
}

const authenticationSlice = createSlice({
    name:'authenticationSlice',
    initialState,
    reducers:{},
    extraReducers:{
        
        // Login Reducer
        [login.pending]: (state) => {
            state.authLoading = true
          },
        [login.fulfilled]: (state, { payload }) => {
            state.authLoading = false
            state.userInfo = payload
        },
        [login.rejected]: (state) => {
            state.authLoading = false
        },


        // Logout Reducer
        [logout.pending]: (state) => {
            state.authLoading = true
          },
        [logout.fulfilled]: (state, { payload }) => {
            state.authLoading = false
            state.userInfo = payload
        },
        [logout.rejected]: (state) => {
            state.authLoading = false
        },


        // registration Reducer
        [registration.pending]: (state) => {
            state.authLoading = true
          },
        [registration.fulfilled]: (state, { payload }) => {
            state.authLoading = false
            state.userInfo = payload
        },
        [registration.rejected]: (state) => {
            state.authLoading = false
        },
    }
})



export default authenticationSlice.reducer;