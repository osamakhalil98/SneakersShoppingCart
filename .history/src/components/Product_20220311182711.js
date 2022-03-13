import React from "react";
import mainProduct from "../images/image-product-1.jpg";

export default function Product() {
  return (
    <div className="mt-5">
      <div>
        <img
          className="rounded-xl"
          srcSet={mainProduct}
          height={400}
          width={400}
        ></img>
      </div>
    </div>
  );
}
