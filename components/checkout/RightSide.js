/* eslint-disable react/jsx-key */
import { XCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import sampleImage from "../../public/images/product-2.png";

const RightSide = () => {
  return (
    <div className="md:w-1/3 p-2 md:p-0 md:ml-5">
      <div className="w-full">
        <p className="font-bold text-lg mb-2 text-center underline">
          Cart short Information
        </p>
        <ul>
          {Array(5)
            .fill()
            .map((_, index) => (
              <li className="border p-2 relative mb-1">
                <XCircleIcon className="h-5 absolute right-1 top-1 cursor-pointer text-gray-400" />
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 mr-2">
                    <Image
                      src={sampleImage}
                      className="w-full h-full rounded-sm"
                    />
                  </div>
                  <div className="text-gray-900 whitespace-no-wrap text-sm">
                    <p>Product Sample Name</p>
                    <p>Quentity - 5</p>
                    <p>$ 250</p>
                  </div>
                </div>
              </li>
            ))}

          <li className="border-double border-4 border-green-600 p-2 flex justify-between">
            <p className="font-bold text-lg">Total</p>
            <p className="font-bold text-lg">$ 1000</p>
          </li>
        </ul>

        <p className="font-bold text-lg mb-2 text-center underline mt-7">
          Payment Processing
        </p>
        <ul>
          <li className="border p-2 relative mb-1 bg-gray-500 text-white">
            <input className="form-check-input  rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label inline-block cursor-pointer " htmlFor="flexRadioDefault1">
                    Cash On Delivery
                </label>
          </li>
          <li className="border p-2 relative mb-1 bg-gray-500 text-white">
            <input className="form-check-input  rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                <label className="form-check-label inline-block cursor-pointer " htmlFor="flexRadioDefault2">
                    Paypal
                </label>
          </li>
          <li className="border p-2 relative mb-1 bg-gray-500 text-white">
            <input className="form-check-input  rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                <label className="form-check-label inline-block cursor-pointer " htmlFor="flexRadioDefault3">
                    Stripe
                </label>
          </li>

          <li>
            <button className="inline-block text-base font-semibold bg-green-700 text-white active:bg-black px-5 py-2 rounded-lg w-full mt-5">
              Payment Success
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
