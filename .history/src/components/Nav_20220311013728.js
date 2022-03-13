import React from "react";
import logo from "../images/logo.svg";
import "./nav.css";

export default function Nav() {
  return (
    <div className=" nav fixed bg-white px-2 pt-2 pb-4 w-screen h-20 flex flex-row">
      <div className="mr-4">
        <img srcSet={logo}></img>
      </div>
      <div>
        {" "}
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
