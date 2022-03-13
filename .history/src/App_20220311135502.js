import "./App.css";
import Info from "./components/Info";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="flex mt-5 justify-between">
        <Info />
      </div>
    </div>
  );
}

export default App;
