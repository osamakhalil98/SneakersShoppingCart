import "./index.css";
import Info from "./components/Info";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="flex align-center justify-between">
        <Info />
      </div>
    </>
  );
}

export default App;
