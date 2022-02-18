/* eslint-disable react/jsx-key */
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ModalComponent from '../common/Modal';
import ProductItem from './ProductItem';

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
  const [modalProductInfo, setModalProductInfo] = useState();
  const {dealOfTheWeektems, dealOfTheWeekLoading} = useSelector((state)=>state.homePageItems.dealOfTheWeek)
  //console.log("modal product id", modalProductInfo)
  
  return (
    <Fragment>
      
      <Slider {...settings}>
        
        { dealOfTheWeekLoading ? "Data Loading.." :
          dealOfTheWeektems.map((item, index)=>(
            
              <Fragment key={index}>
                <ProductItem 
                setModal={setModal}
                setModalProductInfo={setModalProductInfo}
                productItemInfo={item}
                id={index}
              />
            </Fragment>
            
            ))
        }
        
      </Slider>
      
          <ModalComponent modal={modal} setModal={setModal} modalProductInfo={modalProductInfo} />
    
    </Fragment>
  );
};




export default ProductViewCarouselSlider;
