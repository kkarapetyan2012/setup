import React from "react";
import { settings } from "../../../../assets/images/icons";
import "./ProductItem.scss";
import myButton from "../../../../components/button/Button";

const ProductItem = () => (
  <div className="productItem">
    <img src={settings} alt="" />
    <div className="productTitle">
      White Label Casino Solution
    </div>
    <div className="productDescriprtion">
      Lorem Ipsum is simply dummy text of
      theprinting and typesetting industry.
      Lorem Ipsum has been the industry's
      standard text ever since the 1500s,
      when an unknown printer took a galley
      make a type specimen
    </div>
    <myButton className="myButton">view</myButton>
  </div>
);

export default ProductItem;
