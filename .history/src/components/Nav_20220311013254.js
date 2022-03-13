import React from "react";
import logo from "../images/logo.svg";
import * as navStyles from "./nav.module.css";
export default function Nav() {
  return (
    <div
      className={`${navStyles} nav fixed bg-white px-2 pt-2 pb-4 w-screen h-20 flex flex-row`}
    >
      <div className="">
        <img srcSet={logo}></img>
      </div>
      <div>
        {" "}
        <ul></ul>
      </div>
    </div>
  );
}
