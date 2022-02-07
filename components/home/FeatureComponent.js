import Link from "next/link";
import React from "react";

const FeatureComponent = ({backGroundImageClass, column}) => {
  return (
    <div className={`mb-5 sm:w-1/${column} px-6`}>
      <div className={`${backGroundImageClass} promo-bg-1 bg-cover bg-gray-500 bg-right-bottom p-12 bg-center rounded`}>
        <div className="w-2/3">
          <p className="bs-dark-orange-color text-2xl mb-6">Buy 1 Get 1</p>
          <h3 className="font-bold font-size-46 mb-8">
            Fresh Fruits Collection
          </h3>
          <Link href="/">
            <a className="bs-white-btn">Order Now</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
