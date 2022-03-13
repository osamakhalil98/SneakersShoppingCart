import "./index.css";
import Info from "./components/Info";
import Nav from "./components/Nav";
import { motion } from "framer-motion";
import iconCart from "./images/icon-cart.svg";
import iconMinus from "./images/icon-minus.svg";
import iconPlus from "./images/icon-plus.svg";

function App() {
  return (
    <>
      <div className="nav fixed bg-white px-2 pt-2 pb-4 w-9/12 h-20 flex flex-row overflow-hidden">
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
            <div className="mx-6 mt-2">
              <img srcSet={cart}></img>
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
    </>
  );
}

export default App;
