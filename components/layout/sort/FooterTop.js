import { } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import callCenter from "../../../public/images/010-call-center 5.png";
import Support from "../../../public/images/010-call-center 6.png";
import Payment from "../../../public/images/010-call-center 7.png";
import PriceOffer from "../../../public/images/010-call-center8.png";

const FooterTop = () => {
  return (
    <div className="container my-20">
      <div className="sm:flex -mx-4 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          
          <div className="text-center mx-10  px-4 flex items-center">
            <div className="min-w-max mr-4">
              <Image src={callCenter} />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">24 Customer Support</h3>{" "}
              Contact us 24 hours
            </div>
          </div>

          <div className="text-center mx-10  px-4 flex items-center">
            <div className="min-w-max mr-4">
              <Image src={Support} />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">Authentic Products</h3>{" "}
              Contact us 24 hours
            </div>
          </div>

          <div className="text-center mx-10  px-4 flex items-center">
            <div className="min-w-max mr-4">
              <Image src={Payment} />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">Secure Payment</h3>{" "}
              Contact us 24 hours
            </div>
          </div>

          <div className="text-center mx-10  px-4 flex items-center">
            <div className="min-w-max mr-4">
              <Image src={PriceOffer} />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">Best Prices & Offers</h3>{" "}
              Contact us 24 hours
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
