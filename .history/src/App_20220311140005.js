import "./App.css";
import Info from "./components/Info";
import Nav from "./components/Nav";
import { motion } from "framer-motion";
import iconCart from "./images/icon-cart.svg";
import iconMinus from "./images/icon-minus.svg";
import iconPlus from "./images/icon-plus.svg";

function App() {
  return (
      <Nav />
      <span>SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <div>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole. they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="flex">
        <h2>$125.00</h2>
        <span>50%</span>
      </div>
      <span>$250.00</span>
      <div className="flex">
        <div className="w-32 bg-gray-300 flex">
          <img srcSet={iconMinus}></img>
          <p>0</p>
          <img srcSet={iconPlus}></img>
        </div>
        <div>
          <motion.button
            //disabled={isSubmitted}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.2 },
            }}
            type="submit"
            className="sm:w-80 justify-center mx-auto py-3 px-6 border border-transparent shadow-sm text-base font-bold rounded-md text-white bg-orange-800 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <img srcSet={iconCart} />
            Add to cart
          </motion.button>
        </div>
      </div>
  
  );
}

export default App;
