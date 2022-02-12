import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useCartHook from '../../hook/useCartHook';
import carouselOne from "../../public/images/product-1.png";


const ProductItem = ({setModal,id, setModalProductInfo}) => {

    const {addItemToCart, increaseProduct, decrementProduct, cartQuantity } = useCartHook(id);

    console.log("home page", cartQuantity)
    
    const addItem = ()=>{
        const productInfo ={
            id: id,
            title: "Product Name",
            price: "300",
            detail:"lorem",
            image:carouselOne
        }

        addItemToCart(productInfo)
    }

    const increment = ()=>{
      increaseProduct(id)
      }

    const decrement = ()=>{
       decrementProduct(id)
     }  

    const viewModal = ()=>{
      const productInfo ={
        id: id,
        title: "Product Name",
        price: "300",
        detail:"lorem",
        image:carouselOne
    }
      setModal(true)
      setModalProductInfo(productInfo)
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
                        onClick={viewModal}
                      >
                        Details
                        <ArrowRightIcon className="h-5 ml-3 transition group-first:hover:ml-5" />
                      </a>
                    

                    <div className="relative z-10">
                      <div className="flex justify-center items-center text-4xl text-white mb-8">
                        <button className={`${cartQuantity && cartQuantity !== 0 ? "" : "hidden"} h-12 w-12 border border-white rounded-full`} onClick={decrement}> - </button>
                        <span className="px-6"> {cartQuantity} </span>
                        <button className={`${cartQuantity && cartQuantity !== 0 ? "" : "hidden"} h-12 w-12 border border-white rounded-full`} onClick={increment}> + </button>
                    </div>

                      <button 
                        className="bs-dark-green-bg text-white px-8 py-2 rounded-full inline-block"
                        onClick={addItem}
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