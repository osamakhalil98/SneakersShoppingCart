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
          <p className="text-small text-gray-400">
            Fall Limited Edition Sneakers <br />
            $125.00 x
          </p>
        </div>
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
        onClick={() => dispatch(add(state))}
        className="sm:w-72 flex cart-btn justify-center align-center  py-3 px-6 border border-transparent shadow-xl shadow-orange-300 text-base font-bold rounded-xl text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200"
      >
        Add to cart
      </motion.button>
    </div>
  );
}
