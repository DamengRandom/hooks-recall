import React, { useState } from 'react';
// import FirstChild from './FirstChild';
// import SecondChild from './SecondChild';
// if I extract array out of component scope, then it won't cause re-render for SecondChild component
// const arrayReference = [1, 2, 3];
import ThirdChild from './ThirdChild';
export default function TheParent() {
  const [counter, setCounter] = useState(0);
  // if we pass array here, it causes re-render for SecondChild component
  // const arrayReference = [1, 2, 3];

  // or complex way is using useMemo() hook:
  // const arrayReference = React.useMemo(() => [1, 2, 3], []);

  const fetcher = React.useCallback((type) => {
    return fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);

  React.useEffect(() => {
    fetcher('todos');
  }, [fetcher]);

  return (
    <div>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter+1)}> + 1</button>
        <button onClick={() => setCounter(counter-1)}> - 1</button>
      </div>
      {/* <FirstChild /> */}
      {/* <SecondChild arrayReference={arrayReference} /> */}
      <ThirdChild fetcher={fetcher} />
      <button onClick={() => fetcher('users')}>Trigger fetch again !!</button>
    </div>
  );
}
