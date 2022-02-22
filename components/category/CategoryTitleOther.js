import { MenuAlt3Icon, ViewGridIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CategoryTitleOther = ({setDisplayStyle, setOrderingProduct}) => {
    const [Title, setTitle] = useState('Sample Category Name');
    const [productCount, setProductCount] = useState('');
    

    const categoryName = useSelector(state=>state?.homePageItems?.categories?.ctegeoryItemsById?.name);
    const categoryProducts = useSelector(state=>state?.homePageItems?.categories?.ctegeoryItemsById?.products);
    const categoryProductCount = categoryProducts ? categoryProducts.length : '';
    

    const brandName = useSelector(state=>state?.homePageItems?.brands?.brandItemsById[0]?.brand?.name);
    const brandProducts = useSelector(state=>state?.homePageItems?.brands?.brandItemsById);
    const brandProductCount = brandProducts ? brandProducts.length : '';


    //console.log("produt orderingProduct", orderingProduct)
    useEffect(()=>{
        setTitle(categoryName || brandName)
        setProductCount(categoryProductCount || brandProductCount)
    },[categoryName])

    return (
        <div className="my-8">
            <div>
                <h2 className='font-bold text-4xl'>{Title}</h2>
            </div>

            <div className='lg:flex items-center'>
                <div className='lg:w-1/2'>
                    
                </div>

                <div className='lg:w-1/2 flex items-center justify-between lg:justify-end'>
                    <span>{productCount} Products Found</span> &nbsp; &nbsp;
                    <span ><MenuAlt3Icon onClick={()=>setDisplayStyle('menu')} className="h-8 cursor-pointer" /></span> &nbsp; &nbsp;
                    <span ><ViewGridIcon onClick={()=>setDisplayStyle('grid')} className="h-8 cursor-pointer" /></span>  &nbsp;

                    <select name="" id="" onChange={(e)=>setOrderingProduct(e.target.value)}>
                        <option value="asc">Default Sorting</option>
                        <option value="asc">ASC Sorting</option>
                        <option value="desc">DESC Sorting</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default CategoryTitleOther;