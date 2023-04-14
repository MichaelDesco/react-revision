import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

    const incrementClick = () => {
        setCount(count + 1);
    };
    const decrementClick = () => {
        setCount(count - 1);
    };
    const resetClick = () => {
        setCount(0);
    };

  return (
    <div id="counter">
      <h2>Counter</h2>
      <p>Button clicked {count} times</p>
      <button onClick={incrementClick}>Increment</button>
      <button onClick={decrementClick}>Decrement</button>
      <button onClick={resetClick}>Reset</button>
    </div>
  );
};

export default Counter;