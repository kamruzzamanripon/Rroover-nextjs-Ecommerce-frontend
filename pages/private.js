import React from 'react';
import Layout from '../components/layout/Layout';
import MiniCart from '../components/MiniCart';
import Private from '../components/Private';
import { wrapper } from '../store/store';

const PrivatePage = () => {
    return (
        <Layout title='Home Layout'>
            <MiniCart />
            <Private />
    </Layout>
    );
};

export default PrivatePage;

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
   
   

})