import React, { useState } from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { itemActions } from "../redux/itemReducer";
import { cartActions } from "../redux/cartReducer";
import Cart from "./Cart";
import "./nav.css";

export default function Nav() {
  const state = useSelector((state) => state.cart.totalItems);
  const [toggledCart, setToggledCart] = useState(false);

  const handleCart = () => {
    if (toggledCart) {
      return <Cart />;
    }
    setToggledCart(!toggledCart);
  };
  return (
    <div className="nav relative bg-white px-2 pt-2 pb-4 w-auto h-20 flex flex-row overflow-hidden mx-auto">
      <div className="mr-4 logo">
        <img srcSet={logo}></img>
      </div>
      <div className="w-3/5 ml-4">
        <ul className="flex flex-auto flex-row justify-start list-none text-gray-500">
          <li className="mx-3 item">Collections</li>
          <li className="mx-5 item">Men</li>
          <li className="mx-5 item">Women</li>
          <li className="mx-5 item">About</li>
          <li className="mx-5 item">Contact</li>
        </ul>
      </div>
      <div className="ml-4 end-nav">
        <div className="flex flex-row">
          <div className="mx-6 mt-2 cart-total">
            {state ? (
              <p className="items-number text-center text-white w-6 h-3.5  rounded-full bg-orange-500">
                {state}
              </p>
            ) : (
              ""
            )}
            <img
              className="cursor-pointer"
              onClick={handleCart}
              srcSet={cart}
            ></img>
          </div>
          <div className="mx-4">
            <img
              className="avatar"
              srcSet={avatar}
              height={40}
              width={40}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
