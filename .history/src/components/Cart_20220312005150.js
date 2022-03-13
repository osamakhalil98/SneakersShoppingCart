import React from "react";
import productLogo from "../images/image-product-1-thumbnail.jpg";

export default function Cart() {
  return (
    <div className="rounded-2xl mx-auto w-80 h-48 bg-white shadow-xl">
      <h3 className="font-bold py-3 px-3">Cart</h3>
      <hr className="mt-1" />
      <div className="flex mt-3 justify-center">
        <img
          className="rounded-xl"
          srcSet={productLogo}
          height={60}
          width={60}
        />
        <div>
          <p className="text-small text-gray-500">
            Fall Limited Edition Sneakers
          </p>
        </div>
      </div>
    </div>
  );
}
