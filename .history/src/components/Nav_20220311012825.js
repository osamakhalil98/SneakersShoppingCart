import React from "react";
import logo from "../images/logo.svg";

export default function Nav() {
  return (
    <div className="nav fixed bg-indigo-200 pt-2 pb-4 w-screen h-20 flex flex-row">
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
