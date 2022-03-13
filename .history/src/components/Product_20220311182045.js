import React from "react";
import mainProduct from "../images/image-product-1.jpg";

export default function Product() {
  return (
    <div>
      <div>
        <img srcSet={mainProduct}></img>
      </div>
    </div>
  );
}
