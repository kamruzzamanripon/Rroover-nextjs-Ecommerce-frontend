/* eslint-disable react/jsx-key */
import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { useDispatch } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import carouselOne from "../../public/images/product-1.png";
import { addToCart } from '../../store_slices/cartSlice';
import ModalComponent from '../common/Modal';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        top: "-20px",
        right: "3%",
        transform: [{ rotate: "180deg" }],
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        top: "-20px",
        left: "98%",
      }}
      onClick={onClick}
    />
  );
}

const ProductViewCarouselSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const addItemToCart = ()=>{
      const productInfo ={
        
      }
  }
  return (
    <Fragment>
      
      <Slider {...settings}>
        
        {Array(10).fill().map((_, index)=>(
          
          <div key={index}>
            <div className="category-carousel mb-16 text-center mr-5 group">
              <div className='single-bs-product'>
                <div className="h-80 product-img group relative">
                  <div className="bg-gray-50 h-full flex justify-center items-center p-4 mb-6">
                    <Image src={carouselOne} />
                  </div>
                  
                  <h4 className="text-xl mb-3">Product Name</h4>
                  <p>
                    <span className="font-medium bs-dark-orange-color">
                      $200.00
                    </span>
                    <del className="text-gray-400">$300</del>
                  </p>

                  {/* Hover Component */}
                  <div className="product-img-hover absolute h-full w-full top-0 left-0 flex justify-center items-center hidden transition duration-20000 ease-in group-hover:flex">
                    <div className="bg-black absolute h-full w-full opacity-60"></div>
                    
                      <a 
                        className="absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center cursor-pointer"
                        onClick={() => setModal(true)}
                      >
                        Details
                        <ArrowRightIcon className="h-5 ml-3 transition group-first:hover:ml-5" />
                      </a>
                    

                    <div className="relative z-10">
                      <div className="flex justify-center items-center text-4xl text-white mb-8">
                        <button className="h-12 w-12 border border-white rounded-full"> - </button>
                        <span className="px-6"> 0 </span>
                        <button className="h-12 w-12 border border-white rounded-full"> + </button>
                      </div>

                      <button 
                        className="bs-dark-green-bg text-white px-8 py-2 rounded-full inline-block"
                        onClick={()=>dispatch(addToCart(300))}
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                  {/* End Hover Component */}
                  
                </div>
              </div>
            </div>
          </div>
          
        ))}
        
      </Slider>
      
      <ModalComponent modal={modal} setModal={setModal} />

    </Fragment>
  );
};

export default ProductViewCarouselSlider;
