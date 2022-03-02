import { createSlice } from '@reduxjs/toolkit';
import { userInfo } from './data_fetch/userPageFetch';



const initialState = {
    authLoading: false,
    authInfo:{}
}


const userInfoSlice = createSlice({
    name: 'userInfoSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [userInfo.pending]: (state) => {
            state.authLoading = true
        },
        [userInfo.fulfilled]: (state, { payload }) => {
            state.authLoading = false
            state.authInfo = payload
        },
        [userInfo.rejected]: (state) => {
            state.authLoading = false
        },
    }
})

export default userInfoSlice.reducer;