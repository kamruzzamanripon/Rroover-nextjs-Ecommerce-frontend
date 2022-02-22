import { useRouter } from 'next/router';
import React, { useState } from "react";
import AccordionCategories from "./category/AccordionCategories";
import AccordionPriceSlider from "./category/AccordionPriceSlider";
import CategoryTitleOther from "./category/CategoryTitleOther";
import HeroBanner from "./category/HeroBanner";
import Products from "./category/Products";

const Category = () => {
    const [displayStyle, setDisplayStyle] = useState('grid')
    const router = useRouter();
    const {query} = router;

    const [filterPrice, setFilterPrice] = useState('');
    const [orderingProduct, setOrderingProduct] = useState('asc');
    
    //console.log("display orderingProduct", orderingProduct)
  return (
    <div className="container" id="modalRoot">
      <div className="sm:flex">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2"> */}
          
          
          <div className=" mb-8 sm:w-1/3 md:w-1/4 mx-6 sm:mx-0">
            <AccordionCategories />
            <AccordionPriceSlider setFilterPrice={setFilterPrice}  />
          </div>



          <div className=" sm:w-2/3 md:w-3/4 mx-6">
              <HeroBanner />
              <CategoryTitleOther setDisplayStyle={setDisplayStyle} setOrderingProduct={setOrderingProduct}/>
              <Products displayStyle={displayStyle} filterPrice={filterPrice} orderingProduct={orderingProduct} />
            </div>
        
        {/* </div> */}

      </div>
    </div>
  );
};

export default Category;
