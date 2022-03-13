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
      <div>
        <div className="flex justify-center align-center">
          <Info />
        </div>
      </div>
    </>
  );
}

export default App;
