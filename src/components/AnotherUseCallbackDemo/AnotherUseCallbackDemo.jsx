import React, { useCallback, useState } from 'react';
import { Hello } from './Hello';
import { PlusCal } from './PlusCal';

export default function AnotherUseCallbackDemo() {
  const [count, setCount] = useState(0);
  const loopNumbers = [1, 2, 3];
  
  // prevent tracking count value change, so child won't get re-rendered !!!
  
  const increment = useCallback(
    (n) => {
      // setCount(count + 1);
      setCount(c => c + n);
    },
    [setCount],
  );
  
  // it will cause re-render because count value is updated, so increment function has count value tracking, so Hello component get re-rendered because of count value updated

  // const increment = useCallback(
  //   () => {
  //     // setCount(count + 1);
  //     setCount(count + 1);
  //   },
  //   [count, setCount],
  // );

  return (
    <div>
      <Hello increment={increment} />
      <div>Count: {count}</div>
      <div>
        {/* This way prevent re-render */}
        {loopNumbers.map(num => <PlusCal increment={increment} key={num} num={num} />)}
        {/* This way cause a re-render */}
        {/* {loopNumbers.map(num => <PlusCal onClick = {() => increment(num)} key={num} num={num} />)} */}
      </div>
    </div>
  )
}
