import "./info.css";
import React from "react";
import { motion } from "framer-motion";
import iconCart from "../images/icon-cart.svg";
import iconMinus from "../images/icon-minus.svg";
import iconPlus from "../images/icon-plus.svg";

export default function Info() {
  return (
    <div className="flex flex-col align-start mt-8">
      <span className="text-orange-500 font-bold my-4">SNEAKER COMPANY</span>
      <div className="w-3/4">
        <h1 className="text-5xl font-extrabold text-stone-900 mb-8">
          Fall Limited Edition Sneakers
        </h1>
        <div>
          <p className="text-gray-400 font-medium w-84 mb-4">
            These low-profile sneakers are your perfect casual wear <br />
            companion. Featuring a durable rubber outer sole, they'll <br />
            withstand everything the weather can offer.
          </p>
        </div>
        <div className="flex mb-2">
          <h2 className="text-2xl font-bold text-stone-900 mr-2">$125.00</h2>
          <span className="rounded-lg bg-orange-100 text-orange-500 px-3 py-1 text-center font-medium">
            50%
          </span>
        </div>
        <span className="line-through font-medium text-gray-400 mt-3">
          $250.00
        </span>
      </div>
      <div className="flex mt-6 flex-1 justify-between w-1/2">
        <div className="w-44 bg-gray-100 flex rounded-xl align-center justify-between">
          <div className="text-center px-2 mx-2 self-center order-1">
            <img srcSet={iconMinus} />
          </div>
          <span className="text-center font-bold order-2 self-center">0</span>
          <div className="text-center px-2 mx-2 self-center order-3">
            <img srcSet={iconPlus} />
          </div>
        </div>
        <div className="flex">
          <motion.button
            //disabled={isSubmitted}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.2 },
            }}
            type="submit"
            className="sm:w-80 flex cart-btn justify-center align-center mx-auto py-3 px-6 border border-transparent shadow-xl shadow-orange-300 text-base font-bold rounded-xl text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200"
          >
            <div className="cart-logo mx-3">xxx</div>
            Add to cart
          </motion.button>
        </div>
      </div>
    </div>
  );
}
