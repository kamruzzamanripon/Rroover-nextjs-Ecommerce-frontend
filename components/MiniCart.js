/* eslint-disable react/jsx-key */
import { ChevronDownIcon, ChevronUpIcon, ShoppingBagIcon, XCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React, { useState } from 'react';
import sampleImage from '../public/images/product-2.png';

const MiniCart = () => {
    const [bigCart, setBigCart] = useState(false);
    return (
        <div>
            <div className='absolute right-0 top-2/4 z-50' onClick={()=>setBigCart(true)}>
                <div className='bg-slate-600 w-20 h-20 text-center cursor-pointer'>
                    <ShoppingBagIcon className='h-12 text-white ml-4' />
                    <p className='text-white border-t pt-1'>$ 200</p>
                </div>
            </div>

            <div className={`${bigCart ? "flex" : 'hidden'} absolute right-0  top-0 z-50 p-2 bg-gray-600 min-h-screen`}>
                <div className='w-96 text-center border-2 bg-white '>
                    
                    <div className='py-1 border-b-2 flex justify-between px-1'>
                        <span>Shopping Cart</span>
                        <button className='bg-orange-500 p-1 px-2 text-white text-sm' onClick={()=>setBigCart(false)}> Close </button>
                    </div>

                    <div className='cart-item-hight overflow-auto'>
                        <ul>
                            {
                                Array(15)
                                .fill()
                                .map((_,index)=>(
                                    <li className='border-b'>
                                        <div className='flex items-center'>
                                            <div>
                                                <ChevronUpIcon  className='h-8 cursor-pointer' />
                                                <span>5</span>
                                                <ChevronDownIcon className='h-8 cursor-pointer' />
                                            </div>

                                            <div className='ml-2'>
                                                <Image src={sampleImage} width="65" height="65"/>
                                            </div>

                                            <div className='text-left ml-2'>
                                                <p className='text-sm'>product Sample Name</p>
                                                <p className='text-sm'>Other informatino</p>
                                            </div>

                                            <div className='text-center ml-3'>
                                                $ 250
                                            </div>

                                            <div className='ml-4'>
                                                <XCircleIcon className='h-6 text-gray-500 cursor-pointer' />
                                            </div>

                                        </div>
                                    </li>    
                                ))
                            }
                            

                            
                        </ul>
                    </div>

                    <div className=''>
                        <div className='flex items-center'>
                            <button className='bg-white text-center w-full'>
                                <span className='bg-pink-600 p-2 text-white text-lg inline-block w-2/3'>Place Order</span>
                                <span className='bg-pink-800 p-2 text-white text-lg inline-block w-1/3'>$ 250</span>
                            </button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default MiniCart;