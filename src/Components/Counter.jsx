import React, { useState } from "react";
import "./Style.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const IncNum = () => {
    setCounter(counter + 1);
  };

  const DecNum = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <button onClick={IncNum}>+</button>
        <h1>{counter}</h1>
        <button onClick={DecNum}>-</button>
      </div>
    </>
  );
};
export default Counter;
