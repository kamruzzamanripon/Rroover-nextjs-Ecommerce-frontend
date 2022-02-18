import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import homePageReducer from './homePageSlice';


const reducers = combineReducers({
    cart: cartReducer,
    homePageItems: homePageReducer
})

export default reducers