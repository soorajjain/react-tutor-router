import React, { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  let increseCounter = () => {
    setCounter(counter + 1);
  };
  let dicreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increseCounter}>increase</button>
      <button onClick={dicreaseCounter}>decrease</button>
    </div>
  );
}

export default Counter;
