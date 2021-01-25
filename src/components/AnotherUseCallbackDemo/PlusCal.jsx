import React, { memo } from 'react';
import { useCountRenders } from './useCountRenders';

// prevent re-render
export const PlusCal = memo(({ increment, num }) => {
  useCountRenders();
  return (
    <div>
      <button onClick={() => increment(num)}>+ {num} +</button>
    </div>
  )
});

// cause re-render
// export const PlusCal = memo(({ onClick, num }) => {
//   useCountRenders();
//   return (
//     <div>
//       <button onClick={onClick}>+ {num} +</button>
//     </div>
//   )
// });
