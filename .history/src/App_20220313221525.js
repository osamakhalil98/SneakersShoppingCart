import "./index.css";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Product from "./components/Product";
import { Provider } from "react-redux";
import store from "./redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Nav />
        <div className="flex align-center md:justify-end w-auto mt-5 container">
          <Product />

          <div className="md:justify-self-end">
            <Info />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
