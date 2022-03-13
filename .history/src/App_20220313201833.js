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
        <div className="flex md:align-center md:justify-end mt-5 container">
          <div>
            <Product />
          </div>
          <div className="md:justify-self-end">
            <Info />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
