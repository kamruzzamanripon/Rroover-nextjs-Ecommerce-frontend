import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userInfo } from '../store_slices/data_fetch/userPageFetch';


const User = () => {
   const userallInfo = Cookies.get('user_info'); 
   const userInfoParse = userallInfo ? JSON.parse(userallInfo) : '';

   const dispatch = useDispatch();

   const buttonHandle = ()=>{
    dispatch(userInfo())
   }
   //console.log(userInfoParse)
    return (
        <div>
            <h1 >This is urser page {userInfoParse.id}</h1>
            <button onClick={buttonHandle}>click here</button>
        </div>
    );
};

export default User;