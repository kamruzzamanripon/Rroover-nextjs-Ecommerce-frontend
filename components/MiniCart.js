/* eslint-disable react/jsx-key */
import { ChevronDownIcon, ChevronUpIcon, ShoppingBagIcon, XCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import useCartHook from '../hook/useCartHook';

const MiniCart = () => {
    const [bigCart, setBigCart] = useState(false);
   
    const {increaseProduct,decrementProduct, deleteProduct, Total,  cartItems} = useCartHook()

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
        <div>
            <div className='fixed  right-0 top-2/4 z-50' onClick={()=>setBigCart(true)}>
                <div className='bg-slate-600 w-20 h-20 text-center cursor-pointer'>
                    <ShoppingBagIcon className='h-12 text-white ml-4' />
                    <p className='text-white border-t pt-1'>$ {Total}</p>
                </div>
            </div>

            <div className={`${bigCart ? "flex" : 'hidden'} fixed  right-0  top-0 z-50 p-2 bg-gray-600 min-h-screen`}>
                <div className='w-96 text-center border-2 bg-white '>
                    
                    <div className='py-1 border-b-2 flex justify-between px-1'>
                        <span>Shopping Cart</span>
                        <button className='bg-orange-500 p-1 px-2 text-white text-sm' onClick={()=>setBigCart(false)}> Close </button>
                    </div>

                    <div className='cart-item-hight overflow-auto'>
                        <ul>
                            {
                                cartItems
                                .map((item,index)=>(
                                    <li className='border-b' key={index}>
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <ChevronUpIcon  className='h-8 cursor-pointer'  onClick={()=>incresement(item.id)} />
                                                <span>{item.quantity}</span>
                                                <ChevronDownIcon className='h-8 cursor-pointer' onClick={()=>decrement(item.id)} />
                                            </div>

                                            <div className='ml-2'>
                                                <Image src={item ? item.image : ""} width="65" height="65"/>
                                            </div>

                                            <div className='text-left ml-2'>
                                                <p className='text-sm'>{item.title}</p>
                                                <p className='text-sm'>{item.detail}</p>
                                            </div>

                                            <div className='text-center ml-3'>
                                                $ {item.price*item.quantity}
                                            </div>

                                            <div className='ml-4'>
                                                <XCircleIcon className='h-6 text-gray-500 cursor-pointer' onClick={()=>deleteP(item.id)}/>
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
                                <Link href="/cart"><span className='bg-pink-600 p-2 text-white text-lg inline-block w-2/3'>Place Order</span></Link>
                                <span className='bg-pink-800 p-2 text-white text-lg inline-block w-1/3'>$ {Total}</span>
                            </button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default MiniCart;