import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import ProductDisplay from "../../components/product/ProductDisplay";

function Product() {
  return (
    <>
      <Header />
      <div className="product-body">
        <ProductDisplay />
      </div>

      <Footer />
    </>
  );
}

export default Product;
