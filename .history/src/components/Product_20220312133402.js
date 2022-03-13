import "./product.css";
import React, { useRef, useState, useEffect } from "react";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import closeBtn from "../images/icon-close.svg";
import next from "../images/icon-next.svg";
import prev from "../images/icon-previous.svg";
import productThumbnail1 from "../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../images/image-product-4-thumbnail.jpg";

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState("firstProd");
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

  const handleLightBox = () => {
    // displaying the right image
    const selectedImage = selectedProduct;
    const allSLides = document.querySelectorAll(".slides");
    allSLides.forEach((slide) => {
      if (!slide.classList.contains(selectedImage)) {
        slide.classList.add("hidden");
      }
      if (slide.classList.contains(selectedImage)) {
        slide.classList.remove("hidden");
      }
    });
    const modal = document.querySelector(".modal");
    modal.classList.remove("hidden");
    setLightBoxStatus(!lightBoxStatus);
  };

  const handleClose = () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("hidden");
  };

  const handleNext = () => {
    // getting all img-slides by the attr
    const allSlides = document.querySelectorAll("[img-slides]");
    const slides = [...allSlides];
    slides.findIndex((slide, index) => {
      if (!slide.classList.contains("hidden")) {
      }
    });
  };

  const handlePrev = () => {};

  useEffect(() => {
    productHandler();
    if (lightBoxStatus) {
    }
  }, [selectedProduct]);

  return (
    <div className="mt-5">
      <div id="myModal" className="modal mx-auto hidden">
        <div className="modal-content mx-auto">
          <img
            className="close cursor-pointer text-white w-6"
            srcSet={closeBtn}
            onClick={handleClose}
          ></img>

          <img
            className="next cursor-pointer text-white w-6"
            srcSet={next}
            onClick={handleNext}
          ></img>
          <img
            className="prev cursor-pointer text-white w-6"
            srcSet={prev}
            onClick={handlePrev}
          ></img>
          <div className="mySlides slides firstProd" img-slides="1">
            <img
              className="rounded-2xl "
              srcSet={product1}
              height={500}
              width={500}
            />
          </div>

          <div className="mySlides slides secondProd" img-slides="2">
            <img
              className="rounded-2xl "
              srcSet={product2}
              height={500}
              width={500}
            />
          </div>

          <div className="mySlides slides thirdProd" img-slides="3">
            <img
              className="rounded-2xl"
              srcSet={product3}
              height={500}
              width={500}
            />
          </div>

          <div className="mySlides slides fourthProd" img-slides="4">
            <img
              className="rounded-2xl"
              srcSet={product4}
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>

      <div id="mainProd cursor-pointer">
        <img
          className="rounded-xl cursor-pointer"
          onClick={handleLightBox}
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
