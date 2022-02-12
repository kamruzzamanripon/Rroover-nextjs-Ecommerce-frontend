/* eslint-disable react/jsx-key */
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useCartHook from '../hook/useCartHook';

const Cart = () => {
  const {increaseProduct,decrementProduct, deleteProduct, Total,  cartItems} = useCartHook();

  const incresement = (id) => {
    increaseProduct(id);
};

const decrement = (id) => {
    decrementProduct(id);
};

const deleteP = (id)=>{
    deleteProduct(id);
}  
  
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
                
              {
                  cartItems
                  .map((item,index)=>(

                        <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                          <span 
                            className="bg-green-700 inline-block w-3 h-6 text-center text-white rounded-sm hover:text-red-600 cursor-pointer mr-2" 
                            onClick={()=>deleteP(item.id)}
                          >
                            X
                          </span>
                          01
                        </td>
      
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <Image src={item ? item.image : ""} width="100" height="100"/>
                            </div>
                          </div>
                        </td>
      
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item.title}
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            Other information
                          </p>
                        </td>
      
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                          <p className="text-gray-900 whitespace-no-wrap">$ {item.price}</p>
                        </td>
      
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                          <div className="flex items-center">
                            <PlusIcon className="h-6 cursor-pointer" onClick={()=>incresement(item.id)}/>
                            <p className="text-gray-900 whitespace-no-wrap mx-2" >
                            {item.quantity}
                            </p>
                            <MinusIcon className="h-6 cursor-pointer" onClick={()=>decrement(item.id)} />
                          </div>
                        </td>
      
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                          <p className="text-gray-900 whitespace-no-wrap">$ {item.price*item.quantity}</p>
                        </td>
                      </tr>
                    ))
               }
                


              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="md:flex justify-between">
        
        <div>
          <label className="flex">
            <input
              type="text"
              placeholder="Coupon Code"
              className="block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <button className="ml-3 text-base font-semibold bg-orange-600 text-white active:bg-black px-5 py-2 rounded-lg">
              Apply Coupon
            </button>
          </label>
        </div>

        <div className="mt-5 md:mt-0 md:w-1/3">
            <table className="min-w-full">
                <tr>
                    <th className="text-left">Cart Totals</th>
                    <td className="text-right"></td>
                </tr>
                <tr>
                    <th className="text-left">Subtotal</th>
                    <td className="text-right">$ {Total}</td>
                </tr>
                <tr>
                    <th className="text-left">Shipping Charge</th>
                    <td className="text-right">$ 0</td>
                </tr>
                <tr>
                    <th className="text-left">Tax</th>
                    <td className="text-right">$ 0</td>
                </tr>
                <tr>
                    <th className="text-left">Total</th>
                    <td className="text-right">$ {Total}</td>
                </tr>
            </table>
        </div>
     </div>

     <div className="text-right mt-20">
            <Link href="/" >
              <a className="inline-block text-base font-semibold bg-blue-800 text-white active:bg-black px-5 py-2 rounded-lg mr-1 sm:mr-5">Continue to Shopping</a>
            </Link>

            <Link href="/checkout" >
              <a className="inline-block text-base font-semibold bg-green-700 text-white active:bg-black px-5 py-2 rounded-lg">Processed to Checkout</a>
            </Link>
     </div>


    </div>
  );
};

export default Cart;
