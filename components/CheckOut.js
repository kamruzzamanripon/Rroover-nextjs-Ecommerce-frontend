/* eslint-disable react/jsx-key */
import React from 'react';
import LeftSide from './checkout/LeftSide';
import RightSide from './checkout/RightSide';
const CheckOut = () => {
    return (
        <div className='container'>
            <div className='md:flex'>
                
                <LeftSide />
                <RightSide />

            </div>
        </div>
    );
};

export default CheckOut;