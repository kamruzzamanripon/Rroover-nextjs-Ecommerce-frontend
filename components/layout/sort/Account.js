import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LocalStorageHelper from '../../../hook/LocalStorageHelper';
import { userInfo } from '../../../store_slices/data_fetch/userPageFetch';

const Account = () => {
  const userallInfo = LocalStorageHelper.userInfo(); 
  const userInfoParse = userallInfo ? JSON.parse(userallInfo) : '';
  const userId = userInfoParse.id;
  const dispatch = useDispatch();

 
  useEffect(()=>{
    dispatch(userInfo(userId))
  },[])

  //console.log("Header account page", userInfoParse)
    return (
        <Link href="/user">
        <a className="flex items-center" >
          <span>Account</span>
        </a>
      </Link>
    );
};

export default Account;