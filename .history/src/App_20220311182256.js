import "./index.css";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Product from "./components/Product";

function App() {
  return (
    <>
      <div className="w-screen">
        <Nav />
        <div className="flex align-center justify-between w-auto">
          <Product />
          <Info />
        </div>
      </div>
    </>
  );
}

export default App;
