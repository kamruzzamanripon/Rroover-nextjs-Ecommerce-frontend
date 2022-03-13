import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useCartHook from '../../hook/useCartHook';
import carouselOne from "../../public/images/product-1.png";


const ProductItem = ({setModal,id, setModalProductInfo, productItemInfo}) => {
    const productItemId = productItemInfo.id
    const {addItemToCart, increaseProduct, decrementProduct, cartQuantity } = useCartHook(productItemId);
    const productImageParse = productItemInfo.image ? JSON.parse(productItemInfo?.image) : "";
    const productImage = productImageParse[0];

    //console.log("home page", productInfo)
    
    const addItem = ()=>{
       
      const productInfo ={
          id: productItemId,
          title: productItemInfo?.name,
          price: productItemInfo?.actual_price,
          detail:"lorem",
          image:productImage
        }

        //console.log("productInfo",productcartInfo)
        addItemToCart(productInfo)
    }

    const increment = ()=>{
      increaseProduct(productItemId)
      }

    const decrement = ()=>{
       decrementProduct(productItemId)
     }  

    const viewModal = ()=>{
     setModal(true)
      setModalProductInfo(productItemInfo)
    } 

    

    //console.log("image", productImage)

    return (
        <div>
            <div className="category-carousel mb-16 text-center mr-5 group">
              <div className='single-bs-product'>
                <div className="h-100 product-img group relative">
                  <div className="bg-gray-50 h-full flex justify-center items-center p-4 mb-6">
                    <Image src={productImage ? process.env.ImagebaseUrl + productImage : carouselOne} width='318' height='381' objectFit='contain'/>
                  </div>
                  
                  <h4 className="text-xl mb-3">{productItemInfo?.name}</h4>
                  <h4 className="text-xl mb-3">sdfs</h4>
                  <p>
                    <span className="font-medium bs-dark-orange-color">
                      ${productItemInfo?.actual_price}
                    </span> &nbsp;
                    <del className="text-gray-400">${productItemInfo?.discount_price}</del>
                  </p>

                  {/* Hover Component */}
                  <div className="product-img-hover absolute h-full w-full top-0 left-0 flex justify-center items-center hidden transition duration-20000 ease-in group-hover:flex">
                    <div className="bg-black absolute h-full w-full opacity-90"></div>
                    
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