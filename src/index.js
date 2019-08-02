import React from "react";
import ReactDOM from "react-dom";
import Nasalist from "./components/NasaList";
import NasaCard from "./components/NasaCard";

import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Scientists!</h1>
      <h2>We need to see those amazing NasaPics!</h2>
      <Nasalist />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
