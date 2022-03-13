import "./App.css";
import Info from "./components/Info";
import Nav from "./components/Nav";
import { motion } from "framer-motion";
import iconCart from "./images/icon-cart.svg";
import iconMinus from "./images/icon-minus.svg";
import iconPlus from "./images/icon-plus.svg";

function App() {
  return (
    <>
      <Nav />
      <span className="mt-70">SNEAKER COMPANY</span>
    </>
  );
}

export default App;
