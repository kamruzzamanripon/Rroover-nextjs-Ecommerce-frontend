import React from 'react';
import AlterShippingInfo from './AlterShippingInfo';
import UserInfo from './UserInfo';

const LeftSide = () => {
    return (
        <div className='md:w-2/3 p-2 md:p-0 md:mr-5 md:px-5'>
                    <div>
                        <UserInfo />
                        <AlterShippingInfo />
                    </div>
                </div>
    );
};

export default LeftSide;