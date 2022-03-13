import React from "react";
import logo from "../images/logo.svg";
import "./nav.css";

export default function Nav() {
  return (
    <div className=" nav fixed bg-white px-2 pt-2 pb-4 w-screen h-20 flex flex-row overflow-hidden">
      <div className="mr-4">
        <img srcSet={logo}></img>
      </div>
      <div className="w-2/5 ml-4">
        <ul className="flex flex-row  list-none text-gray-500">
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
