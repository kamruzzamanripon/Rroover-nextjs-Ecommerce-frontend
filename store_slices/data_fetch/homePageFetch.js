import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const mainSliderData =  createAsyncThunk(
    'homeSlice/mainSliderdata',
      async ()=>{
        
            try{
                const res = await axios.get(`${process.env.baseUrl}/main-banner`);
                //console.log("Hello")
                //console.log("mainslider server", res)
                return res.data.data
            }catch(e){
                console.log("mainslider server", e.response)
            }
    }
    
)


export const categoryData =  createAsyncThunk(
    'homeSlice/categoryData',
      async ()=>{
          try{
            const res = await axios.get(`${process.env.baseUrl}/category-list`);
            return res.data.data
          }catch(e){
            console.log(e.response)
          }
    }
)


export const brandData =  createAsyncThunk(
    'homeSlice/brandData',
      async ()=>{
        try{
            const res = await axios.get(`${process.env.baseUrl}/brand-list`);
            return res.data.data
        }catch(e){
           console.log(e.response)  
        }
    }
)


export const dealOfTheWeek =  createAsyncThunk(
    'homeSlice/dealOfTheWeek',
      async ()=>{
        try{
            const res = await axios.get(`${process.env.baseUrl}/exclusive-deals`);
            return res.data.data
        }catch(e){
           console.log(e.response)  
        }
    }
)


export const singleCategoryByIdData =  createAsyncThunk(
  'homeSlice/singleCategoryById',
    async (productId)=>{
      try{
        //console.log('single category axios', productId)
          const res = await axios.get(`${process.env.baseUrl}/single-category/${productId}`);
          console.log('axior', productId)
          return res.data.data
      }catch(e){
         console.log(e.response)  
      }
  }
)


export const singleBrandByIdData =  createAsyncThunk(
  'homeSlice/singleBrandByIdData',
    async (brandId)=>{
      try{
        //console.log('single category axios', productId)
          const res = await axios.get(`${process.env.baseUrl}/single-brand/${brandId}`);
          //console.log('axior', productId)
          return res.data.data
      }catch(e){
         console.log(e.response)  
      }
  }
)

