import React from "react";
import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, selectCount } from "./store/counterSlice";

//1. useSelector - hook to pull data from Redux store
//2. useDispatch - hook to fire action

const App = () => {
  const [count, setCount] = useState(0);

  const reduxCount = useSelector(selectCount);
  const dispatch = useDispatch();

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <>
        <div>
          <h1>This is usestate counter</h1>
          <h1>{count}</h1>
          <button onClick={incrementCount}>+</button>
          <button onClick={decrementCount}>-</button>
        </div>
        <div className="App">
          <h1>This is redux counter</h1>
          <h1>{reduxCount}</h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>
      </>
    </div>
  );
};

export default App;
