import Image from 'next/image';
import React from 'react';
import HeroImage from '../../public/images/hero-2.png';

const HeroBanner = () => {
    return (
        <div className='mb-5 relative '>
            <Image src={HeroImage} height="300px"/>

            <div className='absolute left-8 top-0'>
                <p className='text-orange-700 text-xl mb-1 mt-3 sm:mt-1 md:mt-4 xl:mt-28'>Buy 1 Get 1</p>
                <h3 className='bs-dark-green-color text-xl xl:text-2xl'>Up to 30% Discount on <br /> Selected Items</h3>
            </div>
        </div>
    );
};

export default HeroBanner;