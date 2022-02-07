import Image from 'next/image';
import React from 'react';
import PaymentType from '../../../public/images/Frame 1171274604.png';

const FooterBottom = () => {
    return (
        <div className="bg-gray-200 py-10">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center text-center mx-16 sm:flex-nowrap sm:mx-0 items-center ">
           
            <div className="w-full sm:w-1/3">
              
            </div>
            
            <div className="w-full sm:w-1/3 text-center">@2022 Copyright All Right Reserved by Bengal Shop</div>
            
            <div className="w-full sm:w-1/3 text-right">
              <Image src={PaymentType} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default FooterBottom;