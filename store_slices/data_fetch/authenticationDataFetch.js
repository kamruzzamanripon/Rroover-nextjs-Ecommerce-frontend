import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import axios_auth_header from '../../hook/useAxios_auth_header';


export const login = createAsyncThunk(
    'authenticationSlice/login',
    async(data)=>{
        try{
            const res = await axios.post(`${process.env.baseUrl}/user-login/`, data);
            
            if(res.data.token_info){

                const token = res.data.token_info.token
                const user_info = res.data.token_info
                Cookies.set("passport_frontend",  token)
                Cookies.set("user_info",  JSON.stringify(user_info))
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                //console.log("token", res.data)
            }
            //console.log("token", res)
            return res.data;

        }catch(e){

            //console.log("login usere ERror",e.response)
            return e.response;
        }
    }
)

export const logout = createAsyncThunk(
    'authenticationSlice/logout',
    async (ctx)=>{
        try{
            const res = await axios_auth_header(ctx).post(`${process.env.baseUrl}/user-logout`);

            Cookies.remove('passport_frontend')
            Cookies.remove('user_info')
            console.log("axios logout", res)
            
            return res.data;
        }catch(e){
            console.log(e.response)
        }
    }
)

