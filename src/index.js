import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // Entrada, rodando, fim
  const [estado, setEstado] = useState("ENTRADA");

  // palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumpapite] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const IniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumpapite(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={IniciarJogo}>Começar a Jogar</button>;
  }

  const menor = () => {
    setNumpapite(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumpapite(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o numero {palpite} com {numPalpites} chuetes!
        </p>
        <button onClick={IniciarJogo}>Reiniciar</button>
      </div>
    );
  }

  // 0 <> 300
  // palpites que maquina deu
  return (
    <div className="App">
      <p>O seu numero é {palpite} ?</p>

      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
