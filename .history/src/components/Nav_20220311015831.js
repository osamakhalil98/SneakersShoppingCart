import React from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import "./nav.css";

export default function Nav() {
  return (
    <div className=" nav fixed bg-white px-2 pt-2 pb-4 w-screen h-20 flex flex-row overflow-hidden">
      <div className="mr-4">
        <img srcSet={logo}></img>
      </div>
      <div className="w-3/5 ml-4">
        <ul className="flex flex-auto flex-row justify-start list-none text-gray-500">
          <li className="mx-3">Collections</li>
          <li className="mx-6">Men</li>
          <li className="mx-6">Women</li>
          <li className="mx-6">About</li>
          <li className="mx-6">Contact</li>
        </ul>
      </div>
      <div className="justify-self-end	self-end ml-4">
        <div className="flex flex-row">
          <div>
            <img srcSet={cart}></img>
          </div>
          <div className="mx-4">
            <img srcSet={avatar} height={20} width={20}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
