import { createSlice } from '@reduxjs/toolkit';
import { brandData, categoryData, dealOfTheWeek, mainSliderData } from './data_fetch/homePageFetch';


const initialState = {
    mainSlider:{
        loading:false,
        items: [],
        categories:[]
    },
    categories:{
        categoryLoading:false,
        categoryItems:[]
    },
    brands:{
        brandLoading:false,
        brandItems:[]
    },
    dealOfTheWeek:{
        dealOfTheWeekLoading:false,
        dealOfTheWeektems:[]
    }
}


export const homePageSlice = createSlice({
    name: "homePageSlice",
    initialState,
    reducers:{},
    extraReducers: {

        // Main Slider Reducer
        [mainSliderData.pending]: (state) => {
          state.mainSlider.loading = true
        },
        [mainSliderData.fulfilled]: (state, { payload }) => {
            state.mainSlider.loading = false
            state.mainSlider.items = payload
        },
        [mainSliderData.rejected]: (state) => {
            state.mainSlider.loading = false
        },


        // Search By Category Reducer
        [categoryData.pending]: (state) => {
            state.categories.categoryLoading = true
        },
        [categoryData.fulfilled]: (state, { payload }) => {
            state.categories.categoryLoading = false
            state.categories.categoryItems = payload
        },
        [categoryData.rejected]: (state) => {
            state.categories.categoryLoading = false
        },


        //Deals of the Week Reducer
        [brandData.pending]: (state) => {
            state.brands.brandLoading = true
        },
        [brandData.fulfilled]: (state, { payload }) => {
            state.brands.brandLoading = false
            state.brands.brandItems = payload
        },
        [brandData.rejected]: (state) => {
            state.brands.brandLoading = false
        },

        //Deals of the Week Reducer
        [dealOfTheWeek.pending]: (state) => {
            state.dealOfTheWeek.dealOfTheWeekLoading = true
        },
        [dealOfTheWeek.fulfilled]: (state, { payload }) => {
            state.dealOfTheWeek.dealOfTheWeekLoading = false
            state.dealOfTheWeek.dealOfTheWeektems = payload
        },
        [dealOfTheWeek.rejected]: (state) => {
            state.dealOfTheWeek.dealOfTheWeekLoading = false
        },
    },
})

//export const {mainSlider} = homePageSlice.actions

export default homePageSlice.reducer