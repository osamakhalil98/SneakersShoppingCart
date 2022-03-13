import "./product.css";
import React, { useRef, useState, useEffect } from "react";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import closeBtn from "../images/icon-close.svg";
import productThumbnail1 from "../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../images/image-product-4-thumbnail.jpg";

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [lightBoxStatus, setLightBoxStatus] = useState(false);
  const [mainProduct, setMainProduct] = useState("");
  const currentProduct = useRef();

  const handleClick = (e) => {
    if (e.target.id !== selectedProduct) {
      setSelectedProduct(e.target.id);
      const prdElements = document.querySelectorAll(".products");
      prdElements.forEach((elm) => {
        if (elm.id === e.target.id) {
          elm.classList.add("selected-product");
        } else {
          elm.classList.remove("selected-product");
        }
      });
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
      {lightBoxStatus ? (
        <div id="myModal" className="modal">
          <img
            className="close cursor"
            srcSet={closeBtn}
            onClick={() => setLightBoxStatus(!lightBoxStatus)}
          ></img>
          <div className="modal-content">
            <div className="mySlides">
              <img srcSet={product1} height={500} width={500} />
            </div>

            <div className="mySlides">
              <img srcSet={product2} height={500} width={500} />
            </div>

            <div className="mySlides">
              <img srcSet={product3} height={500} width={500} />
            </div>

            <div className="mySlides">
              <img srcSet={product4} height={500} width={500} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div id="mainProd cursor-pointer">
        <img
          className="rounded-xl cursor-pointer"
          onClick={() => setLightBoxStatus(!lightBoxStatus)}
          srcSet={mainProduct}
          height={400}
          width={400}
        ></img>
      </div>
      <div className="flex mt-5 flex-row justify-between" ref={currentProduct}>
        <div className=" rounded-xl  cursor-pointer" onClick={handleClick}>
          {" "}
          <img
            id="firstProd"
            className="rounded-xl  products selected-product"
            srcSet={productThumbnail1}
            height={75}
            width={75}
          ></img>
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {" "}
          <img
            className="rounded-xl products"
            id="secondProd"
            srcSet={productThumbnail2}
            height={75}
            width={75}
          ></img>
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {" "}
          <img
            className="rounded-xl products"
            id="thirdProd"
            srcSet={productThumbnail3}
            height={75}
            width={75}
          ></img>
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {" "}
          <img
            className="rounded-xl products"
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
