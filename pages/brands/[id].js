import React from "react";
import Category from "../../components/Category";
import Layout from "../../components/layout/Layout";
import MiniCart from "../../components/MiniCart";
import { wrapper } from "../../store/store";
import { singleBrandByIdData } from "../../store_slices/data_fetch/homePageFetch";

const BrandProductSingleById = () => {
    return (
        <Layout title="Category">
            <MiniCart />
            <Category />
        </Layout>
    );
};

export default BrandProductSingleById;

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
    const brandId = ctx.params.id;
    //console.log('brandId Single Page', brandId)
    await store.dispatch(singleBrandByIdData(brandId))
   

})