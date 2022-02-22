import { combineReducers } from "@reduxjs/toolkit";
import authenticationReducer from './authenticationSlice';
import cartReducer from './cartSlice';
import homePageReducer from './homePageSlice';


const reducers = combineReducers({
    cart: cartReducer,
    homePageItems: homePageReducer,
    authInfo: authenticationReducer,
})

export default reducers