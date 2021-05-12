import React, { useEffect, useState, useRef } from 'react'

//  Re-render example:

// export default function UseRefDemo() {
//   const [name, setName] = useState('');
//   const renderCount = useRef(0);
//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   });

//   return (
//     <div>
//       <input value={name} onChange={e => setName(e.target.value)} />
//       <div>My name is: {name}</div>
//       <p>Rendered how many times: {renderCount.current}</p>
//     </div>
//   )
// }

export default function UseRefDemo() {
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is: {name}</div>
      <button onClick={focus}>Click to focus on input field</button>
    </div>
  )
}

// export default function UseRefDemo() {
//   const [name, setName] = useState('');
//   const prevName = useRef(null);

//   useEffect(() => {
//     prevName.current = name;
//   }, [name]);

//   return (
//     <div>
//       <input value={name} onChange={e => setName(e.target.value)} />
//       <div>My name is: {name}, and my name was {prevName.current}</div>
//     </div>
//   )
// }

// useRef common usages:

// store the previous value
// locate the current DOM, eg: input focus functionality
// count number of times on re-render

