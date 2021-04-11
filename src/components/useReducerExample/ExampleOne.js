// import React, { useState } from 'react';
import React, { useReducer } from 'react';
import { INCREMENTAL, DECREMENTAL, RESET } from "../../constants/reducerVariables";

function counterReducer(state, action) {
  let { count } = state;

  switch(action.type) {
    case INCREMENTAL:
      return { count: count + 1 };
    case DECREMENTAL:
      return { count: count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return { count };
  };
}

export default function ExampleOne() {
  // const [count, setCount] = useState(0);

  const [{ count }, dispatch] = useReducer(counterReducer, { count: 0 });

  function increment() {
    // setCount(prevCount => prevCount + 1);
    dispatch({ type: INCREMENTAL });
  }

  function decrement() {
    // setCount(prevCount => prevCount - 1);
    dispatch({ type: DECREMENTAL });
  }

  function reset() {
    dispatch({ type: RESET });
  }

  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <span>{count}</span>
    </>
  )
}
