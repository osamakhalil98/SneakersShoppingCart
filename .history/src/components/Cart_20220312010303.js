import React from "react";
import productLogo from "../images/image-product-1-thumbnail.jpg";
import deleteItems from "../images/icon-delete.svg";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Cart() {
  const state = useSelector((state) => state.cart.totalItems);

  return (
    <div className="rounded-2xl mx-auto w-80 h-52 bg-white shadow-xl">
      <h3 className="font-bold py-3 px-3">Cart</h3>
      <hr className="mt-1" />
      <div className="flex mt-3 justify-between mx-2">
        <img
          className="rounded-xl"
          srcSet={productLogo}
          height={60}
          width={60}
        />
        <div>
          <p className="text-small text-gray-400">
            Fall Limited Edition Sneakers <br />
            $125.00 x
          </p>
        </div>
        <img className="w-4 h-5 mt-3" srcSet={deleteItems} />
      </div>
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
        className="sm:w-72 flex mx-auto mt-4 cart-btn justify-center align-center  py-3 px-6 border border-transparent  shadow-orange-300 text-base font-bold rounded-xl text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200"
      >
        Checkout
      </motion.button>
    </div>
  );
}
