import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + 1);
  }

  function decrement() {
    setValue(value - 1);
  }

  function reset() {
    setValue(0);
  }

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <h1>{value}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

