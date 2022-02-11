/* eslint-disable react/jsx-key */
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import carouselOne from "../../public/images/002-fashion-1.png";

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
        transform:[{ rotate: '180deg'}]
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

const CarouselSlider = ({backgroundColorClass}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll:6,
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

  return (
    <Fragment>
      <Slider {...settings}>
        
        {Array(10)
          .fill()
          .map((_, index) => (
            <Link href="/category" key={index}>
              <div className={`${backgroundColorClass} p-4 slicker-carousel mr-5 cursor-pointer`} >
                <div className="h-32 flex justify-center items-center">
                  <Image src={carouselOne} width="85px" height="85px" />
                </div>
                <h4 className="text-xl">Groceries</h4>
              </div>
            </Link>
          ))}

      </Slider>
    </Fragment>
  );
};

export default CarouselSlider;
