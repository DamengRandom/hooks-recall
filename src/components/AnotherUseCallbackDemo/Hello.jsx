import React, { memo } from 'react';
import { useCountRenders } from './useCountRenders';
// memo is just for comparing the props, if the props get changed, then re-render the component !!!!
// going to check the reference value whether changed or not !!!
export const Hello = memo(({ increment }) => {
  useCountRenders();

  return (
    <div>
      <p>Hello: for useCallback Demo only</p>
      {/* <button onClick={increment}>click hello</button> */}
      <button onClick={() => increment(5)}>Click hello</button>
      {/* pass a value (5) from child to parent to run */}
      <br />
    </div>
  )
});
