import "./product.css";
import React, { useRef, useState, useEffect } from "react";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import productThumbnail1 from "../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../images/image-product-4-thumbnail.jpg";

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [mainProduct, setMainProduct] = useState("");
  const currentProduct = useRef();

  const handleClick = (e) => {
    if (e.target.id !== selectedProduct) {
      setSelectedProduct(e.target.id);
    }
  };

  const productHandler = () => {
    switch (selectedProduct) {
      case "firstProd":
        setMainProduct(product1);
        break;
      case "secondProd":
        setMainProduct(product2);
        break;
      case "thirdProd":
        setMainProduct(product3);
        break;
      case "fourthProd":
        setMainProduct(product4);
        break;

      default:
        setMainProduct(product1);
    }
  };
  useEffect(() => {
    productHandler();
  }, [selectedProduct]);

  return (
    <div className="mt-5">
      <div id="mainProd">
        <img
          className="rounded-xl"
          srcSet={mainProduct}
          height={400}
          width={400}
        ></img>
      </div>
      <div className="flex mt-5 flex-row justify-between ">
        <div className=" rounded-xl selected-product" onClick={handleClick}>
          {" "}
          <img
            id="firstProd"
            className="rounded-xl opacity"
            srcSet={productThumbnail1}
            height={75}
            width={75}
          ></img>
        </div>
        <div onClick={handleClick}>
          {" "}
          <img
            className="rounded-xl"
            id="secondProd"
            srcSet={productThumbnail2}
            height={75}
            width={75}
          ></img>
        </div>
        <div onClick={handleClick}>
          {" "}
          <img
            className="rounded-xl"
            id="thirdProd"
            srcSet={productThumbnail3}
            height={75}
            width={75}
          ></img>
        </div>
        <div onClick={handleClick}>
          {" "}
          <img
            className="rounded-xl"
            id="fourthProd"
            srcSet={productThumbnail4}
            height={75}
            width={75}
          ></img>
        </div>
      </div>
    </div>
  );
}
