import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store_slices/data_fetch/authenticationDataFetch';


const LogOut = ({setTokenStatus}) => {
    const dispatch = useDispatch();
    const router = useRouter()

    const logOutuser = ()=>{
        setTokenStatus(false)
        dispatch(logout())
       
    }
    return (
        <>
           <a className="flex items-center cursor-pointer pl-5" onClick={()=>logOutuser()}>
                <span>Logout</span>
            </a>
        </>
    );
};

export default LogOut;