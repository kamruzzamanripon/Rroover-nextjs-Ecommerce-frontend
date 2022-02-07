import Head from "next/head";
import React, { Fragment } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TitleWithBorderBandComponent from "./common/TitleWithBorderBandComponent";
import FeatureComponent from "./home/FeatureComponent";
import CarouselSlider from "./slider/CarouselSlider";
import HeroSlider from "./slider/HeroSlider";
import ProductViewCarouselSlider from "./slider/ProductViewCarouselSlider";

const Home = () => {
  const title = "this is home Page";
  
  return (
    <Fragment>
      
      <Head>
        <title>{title}</title>
      </Head>
       
       <HeroSlider />

        <div className="container my-10">
            <TitleWithBorderBandComponent title="Search By Category" />
            <CarouselSlider backgroundColorClass="bg-gray-200" />
        </div>

        <div className="container">
          <div className="sm:flex -mx-6 justify-between">
              <FeatureComponent backGroundImageClass="promo-bg-1" column="2"/>
              <FeatureComponent backGroundImageClass="promo-bg-2" column="2" />
          </div>
        </div>

        <div className="container my-10">
            <TitleWithBorderBandComponent title="Deals of the Week" />
            <ProductViewCarouselSlider />
        </div>

        <div className="container my-10">
            <TitleWithBorderBandComponent title="Popular Brands" />
            <CarouselSlider backgroundColorClass="" />
        </div>

        <div className="container">
          <div className="sm:flex -mx-6 justify-between">
              <FeatureComponent backGroundImageClass="promo-bg-3" column="3" />
              <FeatureComponent backGroundImageClass="promo-bg-4" column="3"/>
              <FeatureComponent backGroundImageClass="promo-bg-5"  column="3"/>
          </div>
        </div>
 



    </Fragment>
  );
};

export default Home;
