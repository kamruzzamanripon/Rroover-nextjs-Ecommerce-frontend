import Head from "next/head";
import React, { Fragment } from 'react';

const Home = () => {
    const title = "this is home Page"
    return (
        <Fragment>
             <Head>
                <title>{title}</title>
            </Head>
            <h1 className='font-bold text-pink-800'>Page Component</h1>
        </Fragment>
    );
};

export default Home;