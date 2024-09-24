import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(initialValue);
  };

  const decrement = (allowNegative = true) => {
    if (!allowNegative && counter <= 0) return;
    setCounter(counter - 1);
  };

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};

export default useCounter;
