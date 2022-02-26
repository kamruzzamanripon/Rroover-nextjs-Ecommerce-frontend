/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Layout from '../components/layout/Layout';
import MiniCart from '../components/MiniCart';
import User from '../components/User';
import usePrivateRoute from '../hook/usePrivateRoute';
import { wrapper } from '../store/store';

const userPage = () => {
    return (
        <Layout title='Home Layout'>
            <MiniCart />
            <User />
        </Layout>
    );
};

export default usePrivateRoute(userPage);

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
   
   // usePrivateRoute(ctx)

})