import { createAsyncThunk } from '@reduxjs/toolkit';
import axios_auth_header from '../../hook/useAxios_auth_header';


export const userInfo = createAsyncThunk(
    'userInfoSlice/unserInfo',
    async (userId, ctx)=>{
        try{
            const res = await axios_auth_header(ctx).get(`${process.env.baseUrl}/check-out/userinfo/${userId}`);
            console.log("axios account info",res.data.data)
           return res.data.data;
        }catch(e){
            //console.log(e.response);
            return e.response.data.message
        }
    }
)