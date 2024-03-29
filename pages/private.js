/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Layout from '../components/layout/Layout';
import MiniCart from '../components/MiniCart';
import Private from '../components/Private';
import usePrivateRoute from '../hook/usePrivateRoute';
import { wrapper } from '../store/store';

const PrivatePage = () => {
    return (
        <Layout title='Home Layout'>
            <MiniCart />
            <Private />
        </Layout>
    );
};

export default usePrivateRoute(PrivatePage);

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
   
   

})