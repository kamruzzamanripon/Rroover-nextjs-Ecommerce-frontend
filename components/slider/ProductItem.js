import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import carouselOne from "../../public/images/product-1.png";
import { addToCart, decrementQuantity, incrementQuantity, selectItems } from '../../store_slices/cartSlice';


const ProductItem = ({setModal,id}) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectItems)
    console.log(cartItems )
    const addItemToCart = ()=>{
        const productInfo ={
            id: id,
            title: "Product Name",
            price: "300",
            detail:"lorem",
            image:carouselOne
        }

        dispatch(addToCart(productInfo))
    }

    const increaseProduct = ()=>{
        dispatch(incrementQuantity(id))
        }

    const decrementProduct = ()=>{
        dispatch(decrementQuantity(id))
      }  

    return (
        <div>
            <div className="category-carousel mb-16 text-center mr-5 group">
              <div className='single-bs-product'>
                <div className="h-80 product-img group relative">
                  <div className="bg-gray-50 h-full flex justify-center items-center p-4 mb-6">
                    <Image src={carouselOne} />
                  </div>
                  
                  <h4 className="text-xl mb-3">Product Name</h4>
                  <p>
                    <span className="font-medium bs-dark-orange-color">
                      $200.00
                    </span>
                    <del className="text-gray-400">$300</del>
                  </p>

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
                        <button className="h-12 w-12 border border-white rounded-full" onClick={decrementProduct}> - </button>
                        <span className="px-6"> 0 </span>
                        <button className="h-12 w-12 border border-white rounded-full" onClick={increaseProduct}> + </button>
                      </div>

                      <button 
                        className="bs-dark-green-bg text-white px-8 py-2 rounded-full inline-block"
                        onClick={addItemToCart}
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                  {/* End Hover Component */}
                  
                </div>
              </div>
            </div>
          </div>
    );
};

export default ProductItem;