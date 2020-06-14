import React from "react";
import "./ProductList.scss";
import { ProductItem } from "./components/product-item";

const ProductList = () => (
  <div className="productList d-flex flex-column align-items_center">

    <h2>More Information on Our Products</h2>
    <div className="productContainer d-flex flex-wrap justify-content_space-between">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>

  </div>
);

export default ProductList;
