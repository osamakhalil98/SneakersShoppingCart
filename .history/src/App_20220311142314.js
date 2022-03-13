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
      <div className="flex flex-col">
        <Nav />

        <div className="mt-5 flex justify-center align-center main">Hello</div>
      </div>
    </>
  );
}

export default App;
