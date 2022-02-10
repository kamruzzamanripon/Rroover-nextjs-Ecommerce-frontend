import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../store_slices/cartSlice'

//The global store setup
export const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})
