import Image from "next/image";
import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import carouselOne from "../../public/images/product-1.png";

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
    slidesToShow: 6,
    slidesToScroll: 6,
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
        <div>
          <div className="category-carousel mb-16 text-center">
           <div className="rsws">
              <div className="bg-gray-50 h-80 flex justify-center items-center p-4 mb-6">
                <Image src={carouselOne} />
              </div>
              <h4 className="text-xl mb-3">Product Name</h4>
              <p><span className="font-medium bs-dark-orange-color">$200.00</span> <del className="text-gray-400">$300</del></p>
            </div>
          </div>
        </div>

        <div>
          <div className="category-carousel mb-16 text-center">
           <div className="rsws">
              <div className="bg-gray-50 h-80 flex justify-center items-center p-4 mb-6">
                <Image src={carouselOne} />
              </div>
              <h4 className="text-xl mb-3">Product Name</h4>
              <p><span className="font-medium bs-dark-orange-color">$200.00</span> <del className="text-gray-400">$300</del></p>
            </div>
          </div>
        </div>

        <div>
          <div className="category-carousel mb-16 text-center">
           <div className="rsws">
              <div className="bg-gray-50 h-80 flex justify-center items-center p-4 mb-6">
                <Image src={carouselOne} />
              </div>
              <h4 className="text-xl mb-3">Product Name</h4>
              <p><span className="font-medium bs-dark-orange-color">$200.00</span> <del className="text-gray-400">$300</del></p>
            </div>
          </div>
        </div>
      </Slider>
    </Fragment>
  );
};

export default ProductViewCarouselSlider;
