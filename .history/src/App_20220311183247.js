import "./index.css";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Product from "./components/Product";

function App() {
  return (
    <>
      <div className="w-100% overflow-hidden h-screen">
        <Nav />
        <div className="flex align-center justify-end w-auto mt-5 bg-red-200">
          <div>
            {" "}
            <Product />
          </div>
          <div>
            {" "}
            <Info />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
