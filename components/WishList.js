import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sampleImage from "../public/images/product-2.png";

const WishList = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-3">
            <div>
              <h2 className="text-2xl font-semibold leading-tight">Cart Details</h2>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        No.
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Image
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Product Info
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                        <span className="bg-green-700 inline-block w-3 h-6 text-center text-white rounded-sm hover:text-red-600 cursor-pointer mr-2">
                          X
                        </span>
                        01
                      </td>
    
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10">
                            <Image
                              src={sampleImage}
                              className="w-full h-full rounded-sm"
                            />
                          </div>
                        </div>
                      </td>
    
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Product Sample Name
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          Other information
                        </p>
                      </td>
    
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                        <p className="text-gray-900 whitespace-no-wrap">$ 250</p>
                      </td>
    
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                        <div className="flex items-center">
                          <PlusIcon className="h-6 cursor-pointer" />
                          <p className="text-gray-900 whitespace-no-wrap mx-2">
                            04
                          </p>
                          <MinusIcon className="h-6 cursor-pointer" />
                        </div>
                      </td>
    
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                        <p className="text-gray-900 whitespace-no-wrap">$ 1000</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    
          
    
         <div className="text-right mt-5">
                <Link href="/" >
                  <a className="inline-block text-base font-semibold bg-blue-800 text-white active:bg-black px-5 py-2 rounded-lg mr-1 sm:mr-5">Continue to Shopping</a>
                </Link>
    
                <Link href="/cart" >
                  <a className="inline-block text-base font-semibold bg-green-700 text-white active:bg-black px-5 py-2 rounded-lg">Going to Cart</a>
                </Link>
         </div>
    
    
        </div>
      );
};

export default WishList;