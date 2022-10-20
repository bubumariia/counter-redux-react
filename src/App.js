import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>This is usestate counter</h1>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

export default App;
