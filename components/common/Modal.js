/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { HeartIcon, ShareIcon, SwitchHorizontalIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import LocalStorageHelper from '../../hook/LocalStorageHelper';
import useCartHook from '../../hook/useCartHook';



const ModalComponent = ({modal, setModal, modalProductInfo}) => {
    const productItemId = modalProductInfo?.id
    const productImageParse = modalProductInfo?.image ? JSON.parse(modalProductInfo?.image) : "";
    const productImage = process.env.ImagebaseUrl + productImageParse[0];
    const [defaultImage, setdefaultImage] = useState();
    const [productId, setProductId] = useState( modalProductInfo ? modalProductInfo.id : "")
    const {cartQuantity, addItemToCart, increaseProduct, decrementProduct} = useCartHook(productId);
    const router = useRouter();
  


    //console.log("modla qunatity", productImageParse)

    const productInfo ={
      id: productItemId,
      title: modalProductInfo?.name,
      price: modalProductInfo?.actual_price,
      detail:"lorem",
      image: productImage
    }
    
    const addProduct = ()=>{
      addItemToCart(productInfo)
    }

    const incriment = ()=>{
      increaseProduct(productId)
    }

    const dicrement = ()=>{
      decrementProduct(productId)
    }

    const urlSaveIfNotLogin = ()=>{
      let urlLocation = window.location;
      LocalStorageHelper.SetRedirectFromDetails(urlLocation)
      let loginStatus = LocalStorageHelper.userLoginStatus()

      if(loginStatus){
        router.push('/cart')
      }else{
        router.push('/login')
      }
    }

    function toggleModal(e) {
      setIsOpen(!isOpen)
    }
    

    useEffect(()=>{
      setProductId( productItemId ?productItemId : "")
    })

    useEffect(()=>{
      setdefaultImage(productImage)
    },[modalProductInfo])

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
                    {/* <Image src={defaultImage} className='rounded-xl' width={500} height={500}/> */}
                    <img src={defaultImage} alt="" className='w-[500px] h-[500px]' />
                </div>
                <div className='flex items-center cursor-pointer'>
                    { productImageParse.length > 0 ?
                      productImageParse?.map((image, index)=>{
                        return  <img 
                                  src={process.env.ImagebaseUrl + image} 
                                  alt="" 
                                  className="w-28 h-28 mr-1 mt-1"
                                  onClick={()=>setdefaultImage(process.env.ImagebaseUrl + image)}
                                />
                      }) : "dd"
                    }
                    {/* <Image width={100} height={100} src={ModalMainImage} onClick={()=>setdefaultImage(ModalMainImage)}/>
                    <Image width={100} height={100} src={SmallImageOne} onClick={()=>setdefaultImage(SmallImageOne)}/>
                    <Image width={100} height={100} src={SmallImageTwo} onClick={()=>setdefaultImage(SmallImageTwo)}/>
                    <Image width={100} height={100} src={SmallImageThree} onClick={()=>setdefaultImage(SmallImageThree)} />
                    <Image width={100} height={100} src={SmallImageFour} onClick={()=>setdefaultImage(SmallImageFour)}/>
                    <Image width={100} height={100} src={SmallImageFive} onClick={()=>setdefaultImage(SmallImageFive)}/> */}
                </div>
            </div>

            <div className='w-1/2 ml-7'>
                
                <div>
                    <span className='text-xs text-gray-400 mr-5'>STATUS</span> <span className='text-xs bs-dark-green-color font-medium'>In Stock</span>
                    <h2 className='mt-3 text-gray-900 font-medium'>{modalProductInfo?.name}</h2>
                    <div className='flex items-center'>
                        {Array(5).fill().map((_, i)=>(
                            <StarIcon className='h-4 text-orange-300' />
                        ))}
                        &nbsp; &nbsp; <span className='text-xs text-gray-400'>10 reviews</span>
                    </div>
                </div>
             
                <div className='mt-5'>
                    <span className="font-bold text-xl mr-3">
                        ${modalProductInfo?.actual_price} 
                    </span>
                    <del className="text-gray-400 mr-3">$ {modalProductInfo?.discount_price}</del> <span className='text-xs text-gray-400'>(+15% vat included)</span>
                    <p className='text-sm mt-2'>20 Products sold in last 12 hours</p>
                </div>
                
                <hr className='my-5' />    
                
                <div className='my-2'>
                    <div className="flex items-center text-4xl mb-5 justify-center">
                        <span className='text-xs mr-1'>QUANTITY</span> 
                        <button className={`${cartQuantity && cartQuantity !== 0 ? "" : "hidden"} h-10 w-10 border border-gray-900 rounded-full ml-2`} onClick={dicrement}> - </button>
                        <span className="h-10 w-10 border rounded-full bg-gray-300 mx-2 text-center text-2xl font-medium leading-9"> {cartQuantity} </span>
                        <button className={`${cartQuantity && cartQuantity !== 0 ? "" : "hidden"} h-10 w-10 border border-gray-900 rounded-full mr-2`} onClick={incriment}> + </button> 
                        <span className='text-xs text-gray-400'>Only {modalProductInfo?.quantity}  items left</span>
                    </div>
                </div>

                <div>
                  <button className='w-full h-12 bs-dark-green-bg text-white rounded-3xl mb-3' onClick={addProduct} >Add To Cart</button>
                  <button className='w-full h-12 bg-gray-300 text-black rounded-3xl' onClick={urlSaveIfNotLogin}>Buy Now</button>
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