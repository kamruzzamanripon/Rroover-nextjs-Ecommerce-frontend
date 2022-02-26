import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from './data_fetch/authenticationDataFetch';


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
    }
})



export default authenticationSlice.reducer;