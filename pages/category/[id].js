import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Category from "../../components/Category";
import Layout from "../../components/layout/Layout";
import MiniCart from "../../components/MiniCart";
import { wrapper } from "../../store/store";
import { getCart } from "../../store_slices/cartSlice";
import { singleCategoryByIdData } from "../../store_slices/data_fetch/homePageFetch";

const CategorySingeleById = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCart())
        console.log('category menu page')
      })
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