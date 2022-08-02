import React, { Component } from "react";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operate = ["+", "-", "*", "/", "."];

  const updateCalc = (value) => {
    if (
      (operate.includes(value) && calc === "") ||
      (operate.includes(value) && operate.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!operate.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createNum = () => {
    const nums = [];

    for (let i = 1; i < 10; i++) {
      nums.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return nums;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const delLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("/")}>/</button>

          <button onClick={delLast}>Del</button>
        </div>
        <div className="nums">
          {createNum()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
