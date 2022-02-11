import React, { Fragment, useState } from 'react';
import ModalComponent from '../common/Modal';
import ProductItem from '../common/ProductItem';

const Products = ({displayStyle}) => {
  const [modal, setModal] = useState(false);
  const [modalProductInfo, setModalProductInfo] = useState();
   
    //console.log("Product display style", displayStyle)
    return (
        <Fragment>
          
            <div className='flex items-center justify-center'>
                <div className={`${displayStyle === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4" : ''}`}>
                
            {
                 Array(10).fill().map((_,index)=>(
                    <ProductItem 
                    key={index} 
                    setModal={setModal}
                    id={index}
                    displayStyle={displayStyle}
                    setModalProductInfo={setModalProductInfo}
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