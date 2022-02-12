/* eslint-disable react/jsx-key */
import { HeartIcon, ShareIcon, SwitchHorizontalIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import useCartHook from '../../hook/useCartHook';
import SmallImageOne from '../../public/images/1.png';
import SmallImageTwo from '../../public/images/2.png';
import SmallImageThree from '../../public/images/3.png';
import SmallImageFour from '../../public/images/4.png';
import SmallImageFive from '../../public/images/5.png';
import ModalMainImage from '../../public/images/product-2.png';



const ModalComponent = ({modal, setModal, modalProductInfo}) => {
    const [defaultImage, setdefaultImage] = useState(ModalMainImage);
    const [productId, setProductId] = useState( modalProductInfo ? modalProductInfo.id : "")
    const {cartQuantity, addItemToCart, increaseProduct, decrementProduct} = useCartHook(productId);
  


    //console.log("modla qunatity", cartQuantity, productId)
    
    const addProduct = ()=>{
      addItemToCart(modalProductInfo)
    }

    const incriment = ()=>{
      increaseProduct(productId)
    }

    const dicrement = ()=>{
      decrementProduct(productId)
    }

    function toggleModal(e) {
      setIsOpen(!isOpen)
    }

    useEffect(()=>{
      setProductId( modalProductInfo ? modalProductInfo.id : "")
          
    })

    return (
        <>
        {/* <button className="button" onClick={() => setModal(true)}>Open simple modal</button> */}
      <PureModal
        isOpen={modal}
        width="800px"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <div className='flex relative p-2 panel-body '>
            <div className='absolute right-0'> <span onClick={() => setModal(false)}></span> </div>
            <div className='w-1/2'>
                <div>
                    <Image src={defaultImage} className='rounded-xl' width={500} height={500}/>
                </div>
                <div className='flex items-center'>
                    <Image width={100} height={100} src={ModalMainImage} onClick={()=>setdefaultImage(ModalMainImage)}/>
                    <Image width={100} height={100} src={SmallImageOne} onClick={()=>setdefaultImage(SmallImageOne)}/>
                    <Image width={100} height={100} src={SmallImageTwo} onClick={()=>setdefaultImage(SmallImageTwo)}/>
                    <Image width={100} height={100} src={SmallImageThree} onClick={()=>setdefaultImage(SmallImageThree)} />
                    <Image width={100} height={100} src={SmallImageFour} onClick={()=>setdefaultImage(SmallImageFour)}/>
                    <Image width={100} height={100} src={SmallImageFive} onClick={()=>setdefaultImage(SmallImageFive)}/>
                </div>
            </div>

            <div className='w-1/2 ml-7'>
                
                <div>
                    <span className='text-xs text-gray-400 mr-5'>STATUS</span> <span className='text-xs bs-dark-green-color font-medium'>In Stock</span>
                    <h2 className='mt-3 text-gray-900 font-medium'>{modalProductInfo?.title}</h2>
                    <div className='flex items-center'>
                        {Array(5).fill().map((_, i)=>(
                            <StarIcon className='h-4 text-orange-300' />
                        ))}
                        &nbsp; &nbsp; <span className='text-xs text-gray-400'>10 reviews</span>
                    </div>
                </div>
             
                <div className='mt-5'>
                    <span className="font-bold text-xl mr-3">
                        $200.00
                    </span>
                    <del className="text-gray-400 mr-3">$ {modalProductInfo?.price}</del> <span className='text-xs text-gray-400'>(+15% vat included)</span>
                    <p className='text-sm mt-2'>20 Products sold in last 12 hours</p>
                </div>
                
                <hr className='my-5' />    
                
                <div className='my-2'>
                    <div className="flex items-center text-4xl mb-5 justify-center">
                        <span className='text-xs mr-1'>QUANTITY</span> 
                        <button className={`${cartQuantity && cartQuantity !== 0 ? "" : "hidden"} h-10 w-10 border border-gray-900 rounded-full ml-2`} onClick={dicrement}> - </button>
                        <span className="h-10 w-10 border rounded-full bg-gray-300 mx-2 text-center text-2xl font-medium leading-9"> {cartQuantity} </span>
                        <button className={`${cartQuantity && cartQuantity !== 0 ? "" : "hidden"} h-10 w-10 border border-gray-900 rounded-full mr-2`} onClick={incriment}> + </button> 
                        <span className='text-xs text-gray-400'>Only 10 items left</span>
                    </div>
                </div>

                <div>
                  <button className='w-full h-12 bs-dark-green-bg text-white rounded-3xl mb-3' onClick={addProduct} >Add To Cart</button>
                  <button className='w-full h-12 bg-gray-300 text-black rounded-3xl'>Buy Now</button>
                </div>

                <div className='flex justify-between text-xs my-3 mx-2'>
                  <div className='flex items-center'>
                    <HeartIcon className='h-6 mr-1' />
                    <span className='cursor-pointer'>Add To Wishlist</span>
                  </div>

                  <div className='flex items-center'>
                    <SwitchHorizontalIcon className='h-6 mr-1' />
                    <span className='cursor-pointer'>Add To Compare</span>
                  </div>

                  <div className='flex items-center'>
                    <ShareIcon className='h-6 mr-1' />
                    <span className='cursor-pointer'>Share</span>
                  </div>
                </div>

                <hr className='my-2' />   

                <div> 
                   <table className="table-auto">
                          <tr>
                            <th className='pr-5 text-left text-gray-400 text-sm'>SKU</th>
                            <td className='text-xs font-semibold'>KE-008819</td>
                          </tr>
                          <tr>
                            <th className='pr-5 text-left text-gray-400 text-sm'>CATEGORY</th>
                            <td className='text-xs font-semibold'>Food</td>
                          </tr>
                          <tr>
                            <th className='pr-5 text-left text-gray-400 text-sm'>TAGS</th>
                            <td className='text-xs font-semibold'>Food, Fruits, Vegetables</td>
                          </tr>
                   </table>       
                </div> 

            </div>
        </div>
      </PureModal>
      </>
    );
};

export default ModalComponent;