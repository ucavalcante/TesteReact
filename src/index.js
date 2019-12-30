import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Elemento

// JSX
const elemento = (
  <div>
    <h3>Hello World!</h3>
  </div>
);
const elemento2 = React.createElement(
  "div",
  null,
  React.createElement("h3", null, "Hello World!")
);

function Mostrar(props) {
  return <p>{props.i * 2}</p>;
}

//componente funcional
function App(props) {
  const [i, setI] = useState(1);

  const increment = () => {
    setI(i + 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox {i} </h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={increment}>Incrementar</button>
      <Mostrar i={i} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
