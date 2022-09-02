import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Calculator from "./components/Calculator";

function App() {
  const [currentCallc, setCurrentCalc] = useState<string>("");
  const [result, setResult] = useState<string>("");
  let [badReq, setBadReq] = useState<boolean>(false);
  const handleCurrentCalculation = (item: string | number) => {
    const updatedCalc = currentCallc.concat(item.toString());
    setCurrentCalc(updatedCalc);
  };

  const resultHandler = () => {
    const calc = { expression: currentCallc };
    axios
      .post("http://localhost:8080", calc)
      .then((res) => {
        setResult(res.data);
        setBadReq(false);
      })
      .catch((error) => {
        setBadReq(true);
      });
  };

  const resetHadler = () => {
    setCurrentCalc("");
    setResult("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>MY CALCULATOR</h1>
        {badReq && <div style={{ color: "black" }}>Invalid Expression!</div>}
        <div className="wrapper">
          <div style={{ width: "30px", height: "70px" }}>{result}</div>
          <Calculator
            calculation={handleCurrentCalculation}
            getResult={resultHandler}
            reset={resetHadler}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
