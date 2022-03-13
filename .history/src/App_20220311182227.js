import "./index.css";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Nav />
      <div className="flex align-center justify-center w-100%">
        <Product />
        <Info />
      </div>
    </>
  );
}

export default App;
