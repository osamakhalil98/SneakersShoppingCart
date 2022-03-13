import React, { useEffect, useState } from "react";
import productLogo from "../images/image-product-1-thumbnail.jpg";
import deleteItems from "../images/icon-delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/cartReducer";
import { motion } from "framer-motion";

export default function Cart() {
  const dispatch = useDispatch();
  const { remove } = cartActions;
  const [price, setPrice] = useState(0);
  const state = useSelector((state) => state.cart.totalItems);

  useEffect(() => {
    if (state > 0) {
      setPrice(state * 125.0);
    }
  }, [price, state]);

  return (
    <div className="rounded-2xl mx-auto w-40 md:w-80 h-52 bg-white shadow-xl">
      <h3 className="font-bold py-3 px-3">Cart</h3>
      <hr className="mt-1" />
      {state > 0 ? (
        <>
          <div className="flex mt-3 justify-between  md:mx-2">
            <img
              className="rounded-xl mr-2"
              srcSet={productLogo}
              height={60}
              width={60}
            />
            <div>
              <p className="text-xs md:text-small text-gray-400">
                Fall Limited Edition Sneakers <br />
                $125.00 x {state}{" "}
                <span className="font-bold text-black">${price}.00</span>
              </p>
            </div>
            <img
              className="w-4 h-5 mt-3 cursor-pointer"
              srcSet={deleteItems}
              onClick={() => dispatch(remove())}
            />
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
            className="w-34 md:w-72 flex mx-auto mt-2 md:mt-4 cart-btn justify-center align-center  py-3 px-6 border border-transparent  shadow-orange-300 text-base font-bold rounded-xl text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200"
          >
            Checkout
          </motion.button>
        </>
      ) : (
        <div className="flex justify-center align-center h-full my-auto">
          <h1 className="text-gray-400 font-bold">Your cart is empty.</h1>
        </div>
      )}
    </div>
  );
}
