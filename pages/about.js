/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import About from '../components/About';
import Layout from '../components/layout/Layout';
import usePrivateRoute from '../hook/usePrivateRoute';
import { wrapper } from '../store/store';

const aboutPage = () => {
    return (
        <Layout title='Home Layout'>
            <About />
        </Layout>
    );
};

export default usePrivateRoute(aboutPage);

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
   
   

})