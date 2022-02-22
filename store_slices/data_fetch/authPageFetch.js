import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const login = createAsyncThunk(
    'authenticationSlice/login',
    async(data)=>{
        try{
            const res = await axios.post(`${process.env.baseUrl}/user-login/`, data);
            
            const token = res.data.token_info.token
            const user_info = res.data.token_info
            Cookies.set("passport_frontend",  token)
            Cookies.set("user_info",  JSON.stringify(user_info))
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
            //console.log("token", res)
            return res.data;
        }catch(e){
            console.log(e.response)
        }
    }
)

