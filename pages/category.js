import React from "react";
import Category from "../components/Category";
import Layout from "../components/layout/Layout";
import MiniCart from "../components/MiniCart";

const category = () => {
  return (
    <Layout title="Category">
      <MiniCart />
      <Category />
    </Layout>
  );
};

export default category;
