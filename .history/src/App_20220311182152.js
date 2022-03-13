import "./index.css";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Nav />
      <div className="flex align-center justify-between w-screen">
        <Product />
        <Info />
      </div>
    </>
  );
}

export default App;
