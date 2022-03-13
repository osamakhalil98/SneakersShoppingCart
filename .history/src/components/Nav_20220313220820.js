import React, { useState } from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import "./nav.css";

export default function Nav() {
  const state = useSelector((state) => state.cart.totalItems);
  const [toggledCart, setToggledCart] = useState(false);

  const handleCart = () => {
    setToggledCart(!toggledCart);
  };
  return (
    <div className="nav w-screen px-2 pt-2 md:w-auto h-20 flex">
      <div className="mr-4 logo">
        <img srcSet={menu} className="mt-3 h-100 w-auto"></img>
      </div>
      <div className="mr-4 logo">
        <img srcSet={logo} className="mt-3 h-100 w-auto"></img>
      </div>
      <div className="w-3/5 ml-4 h-full hidden md:block">
        <ul className="flex flex-auto flex-row justify-start list-none text-gray-500 h-full">
          <li className="mx-3 h-full item hover:border-b-4 border-b-orange-500 cursor-pointer">
            Collections
          </li>
          <li className="mx-5 item h-full item hover:border-b-4 border-b-orange-500 cursor-pointer">
            Men
          </li>
          <li className="mx-5 item h-full item hover:border-b-4 border-b-orange-500 cursor-pointer">
            Women
          </li>
          <li className="mx-5 item h-full item hover:border-b-4 border-b-orange-500 cursor-pointer">
            About
          </li>
          <li className="mx-5 item h-full item hover:border-b-4 border-b-orange-500 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
      <div className="ml-4 end-nav ">
        <div className="flex flex-row">
          <div className="mx-6 mt-2 cart-total">
            {state ? (
              <p className="items-number z-10 text-center text-white w-6 h-3.5  rounded-full bg-orange-500">
                {state}
              </p>
            ) : (
              ""
            )}
            <img
              className="cursor-pointer cart-logo-nav"
              onClick={handleCart}
              srcSet={cart}
            ></img>
            {toggledCart ? (
              <div className="cart-items">
                <Cart />{" "}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="mx-4">
            <img
              className="avatar hover:border-orange-500 hover:border-2 rounded-3xl cursor-pointer"
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
