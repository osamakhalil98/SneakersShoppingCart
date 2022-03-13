import React from "react";
import mainProduct from "../images/image-product-1.jpg";
import productThumbnail1 from "../images/image-product-1-thumbnail.jpg";

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
      <div>
        <div className="flex mt-5">
          {" "}
          <img
            className="rounded-xl"
            srcSet={productThumbnail1}
            height={100}
            width={100}
          ></img>
        </div>
        <div>
          {" "}
          <img
            className="rounded-xl"
            srcSet={productThumbnail1}
            height={100}
            width={100}
          ></img>
        </div>
        <div>
          {" "}
          <img
            className="rounded-xl"
            srcSet={productThumbnail1}
            height={100}
            width={100}
          ></img>
        </div>
        <div>
          {" "}
          <img
            className="rounded-xl"
            srcSet={productThumbnail1}
            height={100}
            width={100}
          ></img>
        </div>
      </div>
    </div>
  );
}
