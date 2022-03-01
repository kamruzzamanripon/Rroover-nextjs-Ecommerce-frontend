import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import sampleImage from '../../public/images/hero-2.png';

const HeroBanner = () => {
    const [heroImage, setHeroImage] = useState('');
    
    const categoryImage = useSelector(state=>state?.homePageItems?.categories?.ctegeoryItemsById?.image);
    const brandImage = useSelector(state=>state?.homePageItems?.brands?.brandItemsById[0]?.brand?.image);

    //console.log("hero", brandImage)

    useEffect(()=>{
        setHeroImage(categoryImage || brandImage)
    },[brandImage, categoryImage])    
    return (
        <div className='mb-5 relative '>
            <Image src={heroImage ? heroImage : sampleImage} height="25px" width="100%" layout='responsive' />
           

            <div className='absolute left-8 top-0'>
                <p className='text-orange-700 text-xl mb-1 mt-3 sm:mt-1 md:mt-4 xl:mt-28'>Buy 1 Get 1</p>
                <h3 className='bs-dark-green-color text-xl xl:text-2xl'>Up to 30% Discount on <br /> Selected Items</h3>
            </div>
        </div>
    );
};

export default HeroBanner;