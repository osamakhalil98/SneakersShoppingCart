import React from "react";
import mainProduct from "../images/image-product-1.jpg";

export default function Product() {
  return (
    <div>
      <div>
        <img srcSet={mainProduct} height={200} width={200}></img>
      </div>
    </div>
  );
}
