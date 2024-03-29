/* eslint-disable react/jsx-key */
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HeroImage from "../../public/images/hero.png";

const HeroSlider = () => {
  const title = "this is home Page";
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
         bottom: "8%",
        }}
      >
        <ul
          style={{
            margin: "0px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };

  const dispatch = useDispatch()
  const {items, loading} = useSelector((state)=>state.homePageItems.mainSlider)

  //console.log('tiemt' ,items)
  useEffect(()=>{
    //dispatch(mainSliderdata())
  },[dispatch])

  //console.log(loading)
  return (
    <Fragment>
      <Slider {...settings}>
        
        { 
       loading ? "Data Loading" :
        items.map((item, index)=>(
        
           <div className="p-8 " key={index}>
           <div className="slider-bg rounded-2xl relative">
             <div className="container">
               <div className="flex items-center">
                 <div className="w-1/2 mr-6 font-size-22">
                   <p className="bs-dark-green-color font-size-32 mb-4">
                     Save up 30% Off
                   </p>
                   <h2 className="text-5xl font-bold mb-6 text-gray-600">
                     {item.title}
                   </h2>
                   <p className="mb-8">
                     {item.sub_title}
                   </p>
 
                   <Link href="/">
                     <a className="bs-button text-base">Shop Now</a>
                   </Link>
                 </div>
 
                 <div className="w-1/2 flex justify-end text-right">
                   <Image 
                      src={ item.image ? process.env.ImagebaseUrl + item.image : HeroImage} 
                      width="661"
                      height="819"
                    />
                   
                 </div>
               </div>
             </div>
           </div>
         </div>
        ))
        
        }
       

       
      </Slider>
    </Fragment>
  );
};

export default HeroSlider;

