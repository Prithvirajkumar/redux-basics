import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount, resetCount } from "./countActions";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const onIncrement = () => dispatch(incrementCount());
  const onDecrement = () => dispatch(decrementCount());
  const onResetCount = () => dispatch(resetCount());

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={onIncrement}>Increment +1</button>
      <button onClick={onResetCount}>Reset</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default App;
