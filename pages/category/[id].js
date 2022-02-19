import React from "react";
import Category from "../../components/Category";
import Layout from "../../components/layout/Layout";
import MiniCart from "../../components/MiniCart";
import { wrapper } from "../../store/store";
import { singleCategoryByIdData } from "../../store_slices/data_fetch/homePageFetch";

const CategorySingeleById = () => {
    
    return (
        <Layout title="Category">
            <MiniCart />
            <Category />
        </Layout>
    );
   
};

export default CategorySingeleById;

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
    const productId = ctx.params.id;
    //console.log('Category Single Page', productId)
   await store.dispatch(singleCategoryByIdData(productId))
   

})