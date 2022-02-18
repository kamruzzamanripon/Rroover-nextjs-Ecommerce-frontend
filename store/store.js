import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import reducer from '../store_slices/index';


const devMode = process.env.NODE_ENV === 'development';

//The global store setup
export const makeStore = ()=> configureStore({
    reducer:reducer,
    devTools: devMode,
})


export const wrapper = createWrapper(makeStore, {
    debug: devMode,
 });
