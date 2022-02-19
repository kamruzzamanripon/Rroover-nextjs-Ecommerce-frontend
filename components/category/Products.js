import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ModalComponent from '../common/Modal';
import ProductItem from '../common/ProductItem';

const Products = ({displayStyle}) => {
  const [modal, setModal] = useState(false);
  const [modalProductInfo, setModalProductInfo] = useState();
  const [productArray, setProductArray] = useState([])

  const categoryProduct = useSelector(state=>state?.homePageItems?.categories?.ctegeoryItemsById?.products)
  const brandProducts = useSelector(state=>state?.homePageItems?.brands?.brandItemsById);
   
  useEffect(()=>{
    setProductArray(categoryProduct || brandProducts)
  },[categoryProduct])
    //console.log("Product display style", productArray)
    return (
        <Fragment>
          
            <div className='flex items-center justify-center'>
                <div className={`${displayStyle === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4" : ''}`}>
                
            {
                 productArray.map((item,index)=>(
                    <ProductItem 
                    key={index} 
                    setModal={setModal}
                    id={index}
                    displayStyle={displayStyle}
                    setModalProductInfo={setModalProductInfo}
                    productItemInfo={item}
                  />
                  
                 ))
            }
            <ModalComponent modal={modal} setModal={setModal} modalProductInfo={modalProductInfo} />
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