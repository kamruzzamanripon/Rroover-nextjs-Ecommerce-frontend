/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import carouselOne from "../../public/images/product-1.png";
import ModalComponent from '../common/Modal';

const Products = ({displayStyle}) => {
  const [modal, setModal] = useState(false);
   
    //console.log("Product display style", displayStyle)
    return (
        <Fragment>
          
            <div className='flex items-center justify-center'>
                <div className={`${displayStyle === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4" : ''}`}>
                
            {
                 Array(10).fill().map((_,index)=>(
                    <div className='mb-14 sm:mb-5' key={index}>
                    <div className="category-carousel mb-16 text-center mr-5 group">
                      <div className='single-bs-product'>
                        
                        <div className={`${displayStyle === 'grid' ? 'h-72 product-img group relative' : 'h-80 product-img group relative flex items-center space-x-5 justify-between' }`}>
                        {/* <div className="h-80 flex items-center space-x-5 justify-between"> */}
                          <div className="h-auto p-4">
                            <Image src={carouselOne} height="310" width="310"/>
                          </div>
                          
                          <div className='mb-10'>
                            <h4 className="text-xl mb-3">Product Name</h4>
                            <p>
                                <span className="font-medium bs-dark-orange-color">
                                $200.00
                                </span>
                                <del className="text-gray-400">$300</del>
                            </p>
                          </div>

                          {displayStyle === 'menu' && (
                              <div className='hidden md:block w-1/4 text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque, laudantium, sapiente, ipsam ratione dicta atque doloribus officia quas architecto saepe explicabo voluptates mollitia. Sequi.
                              </div>  
                          )}  
                          
            
                          {/* Hover Component */}
                          <div className="product-img-hover absolute h-full w-full top-0 left-0 flex justify-center items-center hidden transition duration-20000 ease-in group-hover:flex">
                            <div className="bg-black absolute h-full w-full opacity-60"></div>
                            
                            <a 
                              className="absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center cursor-pointer"
                              onClick={() => setModal(true)}
                            >
                                 Details
                                <ArrowRightIcon className="h-5 ml-3 transition group-first:hover:ml-5" />
                                
                              </a>
            
                            <div className="relative z-10">
                              <div className="flex justify-center items-center text-4xl text-white mb-8">
                                <button className="h-12 w-12 border border-white rounded-full"> - </button>
                                <span className="px-6"> 0 </span>
                                <button className="h-12 w-12 border border-white rounded-full"> + </button>
                              </div>
            
                              <button className="bs-dark-green-bg text-white px-8 py-2 rounded-full inline-block">
                                Add to card
                              </button>
                            </div>
                          </div>
                          {/* End Hover Component */}
                          
                        </div>

                        
                      </div>
                    </div>
                    
                  </div>
                  
                 ))
            }
            <ModalComponent modal={modal} setModal={setModal} />
            </div>
            
        </div>
        
        <div className='mt-16 text-center'>
            <button className="bs-dark-green-bg text-white px-10 py-4 rounded-full inline-block">
                Load More
            </button>
        </div>
      </Fragment>
        
        
    );
};

export default Products;