import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
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

  return (
    <Fragment>
      <Slider {...settings}>
        <div className="p-8 ">
          <div className="slider-bg rounded-2xl pt-8 relative">
            <div className="container">
              <div className="flex items-center">
                <div className="w-1/2 mr-6 font-size-22">
                  <p className="bs-dark-green-color font-size-32 mb-4">
                    Save up 30% Off
                  </p>
                  <h2 className="text-5xl font-bold mb-6 text-gray-600">
                    Bengal Vegetable Farm Organic 100%
                  </h2>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    veritatis aperiam natus nulla illum. Vitae itaque culpa
                    reiciendis.
                  </p>

                  <Link href="/">
                    <a className="bs-button text-base">Shop Now</a>
                  </Link>
                </div>

                <div className="w-1/2 flex justify-end">
                  <Image src={HeroImage} width="550" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="slider-bg rounded-2xl pt-8 relative">
            <div className="container">
              <div className="flex items-center">
                <div className="w-1/2 mr-6 font-size-22">
                  <p className="bs-dark-green-color font-size-32 mb-4">
                    Save up 80% Off
                  </p>
                  <h2 className="text-5xl font-bold mb-6 text-gray-600">
                    Bengal Vegetable Farm Organic 100%
                  </h2>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    veritatis aperiam natus nulla illum. Vitae itaque culpa
                    reiciendis.
                  </p>

                  <Link href="/">
                    <a className="bs-button text-base">Shop Now</a>
                  </Link>
                </div>

                <div className="w-1/2 flex justify-end">
                  <Image src={HeroImage} width="550" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="slider-bg rounded-2xl pt-8 relative">
            <div className="container">
              <div className="flex items-center">
                <div className="w-1/2 mr-6 font-size-22">
                  <p className="bs-dark-green-color font-size-32 mb-4">
                    Save up 90% Off
                  </p>
                  <h2 className="text-5xl font-bold mb-6 text-gray-600">
                    Bengal Vegetable Farm Organic 100%
                  </h2>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    veritatis aperiam natus nulla illum. Vitae itaque culpa
                    reiciendis.
                  </p>

                  <Link href="/">
                    <a className="bs-button text-base">Shop Now</a>
                  </Link>
                </div>

                <div className="w-1/2 flex justify-end">
                  <Image src={HeroImage} width="550" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="slider-bg rounded-2xl pt-8 relative">
            <div className="container">
              <div className="flex items-center">
                <div className="w-1/2 mr-6 font-size-22">
                  <p className="bs-dark-green-color font-size-32 mb-4">
                    Save up 90% Off
                  </p>
                  <h2 className="text-5xl font-bold mb-6 text-gray-600">
                    Bengal Vegetable Farm Organic 100%
                  </h2>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    veritatis aperiam natus nulla illum. Vitae itaque culpa
                    reiciendis.
                  </p>

                  <Link href="/">
                    <a className="bs-button text-base">Shop Now</a>
                  </Link>
                </div>

                <div className="w-1/2 flex justify-end">
                  <Image src={HeroImage} width="550" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="slider-bg rounded-2xl pt-8 relative ">
            <div className="container">
              <div className="flex items-center">
                <div className="w-1/2 mr-6 font-size-22">
                  <p className="bs-dark-green-color font-size-32 mb-4">
                    Save up 90% Off
                  </p>
                  <h2 className="text-5xl font-bold mb-6 text-gray-600">
                    Bengal Vegetable Farm Organic 100%
                  </h2>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    veritatis aperiam natus nulla illum. Vitae itaque culpa
                    reiciendis.
                  </p>

                  <Link href="/">
                    <a className="bs-button text-base">Shop Now</a>
                  </Link>
                </div>

                <div className="w-1/2 flex justify-end">
                  <Image src={HeroImage} width="550" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </Fragment>
  );
};

export default HeroSlider;
