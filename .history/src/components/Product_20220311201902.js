import "./product.css";
import React, { useState } from "react";
import mainProduct from "../images/image-product-1.jpg";
import productThumbnail1 from "../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../images/image-product-4-thumbnail.jpg";

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState();

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
      <div className="flex mt-5 flex-row justify-between ">
        <div className=" rounded-xl selected-product">
          {" "}
          <img
            className="rounded-xl "
            style={{ opacity: "0.5" }}
            srcSet={productThumbnail1}
            height={75}
            width={75}
          ></img>
        </div>
        <div>
          {" "}
          <img
            className="rounded-xl"
            srcSet={productThumbnail2}
            height={75}
            width={75}
          ></img>
        </div>
        <div>
          {" "}
          <img
            className="rounded-xl"
            srcSet={productThumbnail3}
            height={75}
            width={75}
          ></img>
        </div>
        <div>
          {" "}
          <img
            className="rounded-xl"
            srcSet={productThumbnail4}
            height={75}
            width={75}
          ></img>
        </div>
      </div>
    </div>
  );
}
