import React from 'react';
import ForgetPssword from '../components/ForgetPssword';
import Layout from '../components/layout/Layout';
import ifLogIn from '../hook/ifLogIn';
import { wrapper } from '../store/store';

const forgetpassword = () => {
    return (
        <Layout title='Login'>
            <ForgetPssword />
        </Layout>
    );
};

export default forgetpassword;

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
    //If login than go to home page, when you hit login page. 
    ifLogIn(ctx)
  
  })
  