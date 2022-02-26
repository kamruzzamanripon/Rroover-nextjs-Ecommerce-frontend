import React from 'react';
import ForgetPasswordReset from '../components/ForgetPasswordReset';
import Layout from '../components/layout/Layout';
import ifLogIn from '../hook/ifLogIn';
import { wrapper } from '../store/store';

const forgetpasswordreset = () => {
    return (
        <Layout title='Login'>
            <ForgetPasswordReset />
        </Layout>
    );
};

export default forgetpasswordreset;

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
    //If login than go to home page, when you hit login page. 
    ifLogIn(ctx)
  
  })
  