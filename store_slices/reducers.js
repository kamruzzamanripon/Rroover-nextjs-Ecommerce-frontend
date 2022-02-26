import { combineReducers } from "@reduxjs/toolkit";
import authenticationReducer from './authenticationSlice';
import cartReducer from './cartSlice';
import homePageReducer from './homePageSlice';
import userInfoReducer from './userPageSlice';


const reducers = combineReducers({
    cart: cartReducer,
    homePageItems: homePageReducer,
    authInfo: authenticationReducer,
    userInfo: userInfoReducer,
})

export default reducers