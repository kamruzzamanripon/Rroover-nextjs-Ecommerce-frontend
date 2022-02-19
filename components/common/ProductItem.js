import { ArrowRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useCartHook from '../../hook/useCartHook';
import carouselOne from "../../public/images/product-1.png";

const ProductItem = ({ setModal, id, displayStyle, key, setModalProductInfo, productItemInfo }) => {

  const productItemId = productItemInfo.id
  const {addItemToCart, increaseProduct, decrementProduct, cartQuantity } = useCartHook(productItemId);
  const productImageParse = productItemInfo.image ? JSON.parse(productItemInfo?.image) : "";
  const productImage = productImageParse[0];

  //console.log(id)

  const productInfo ={
    id: productItemId,
    title: productItemInfo?.name,
    price: productItemInfo?.actual_price,
    detail:"lorem",
    image:productImage
  }
  const addProduct = () => {
     addItemToCart(productInfo)
  };

  const increament = () => {
    increaseProduct(productItemId)
  };

  const decrement = () => {
    decrementProduct(productItemId)
  };

  const viewModal = ()=>{
    setModal(true)
    setModalProductInfo(productItemInfo)
  } 

 
  return (
    <div>
      <div className="mb-14 sm:mb-5" key={key}>
        <div className="category-carousel mb-16 text-center mr-5 group">
          <div className="single-bs-product">
            <div
              className={`${
                displayStyle === "grid"
                  ? "h-72 product-img group relative"
                  : "h-80 product-img group relative flex items-center space-x-5 justify-between"
              }`}
            >
              {/* <div className="h-80 flex items-center space-x-5 justify-between"> */}
              <div className="h-auto p-4">
                <Image src={productImage ? productImage : carouselOne} height="310" width="310" objectFit='contain'/>
              </div>

              <div className="mb-10">
                <h4 className="text-xl mb-3">{productItemInfo?.name}</h4>
                <p>
                  <span className="font-medium bs-dark-orange-color">
                    ${productItemInfo?.actual_price}
                  </span>
                  <del className="text-gray-400">${productItemInfo?.discount_price}</del>
                </p>
              </div>

              {displayStyle === "menu" && (
                <div className="hidden md:block w-1/4 text-justify">
                  {productItemInfo?.details}
                </div>
              )}

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
                    <button
                      className={`${
                        cartQuantity && cartQuantity !== 0 ? "" : "hidden"
                      } h-12 w-12 border border-white rounded-full`}
                      onClick={decrement}
                    >
                      -
                    </button>
                    <span className="px-6"> {cartQuantity} </span>
                    <button
                      className={`${
                        cartQuantity && cartQuantity !== 0 ? "" : "hidden"
                      } h-12 w-12 border border-white rounded-full`}
                      onClick={increament}
                    >
                     +
                    </button>
                  </div>

                  <button
                    className="bs-dark-green-bg text-white px-8 py-2 rounded-full inline-block"
                    onClick={addProduct}
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
    </div>
  );
};

export default ProductItem;
