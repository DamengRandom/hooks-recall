import React, { useState, useCallback } from 'react';
import ItemListComponent from './UseCallbackSubComponent/ItemListComponent';

export default function UseCallbackDemo() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1]
  }, [number]); // detect changes on this arrow function
  // only use whe creating is very slow, we need useCallback to avoid unnecessary re-rendering for performance handling !!!
  //  when you have some value inside dependency array eg: [getItems] inside <ItemListComponent /> !!! you need to use the useCallback hook !!!

  const theme = {
    backgroundColor: dark ? '#333' : '#ccc',
    color: dark ? '#ccc' : '#333'
  };

  const toggleTheme = () => {
    console.log('toggle theme ...');
    setDark(prevDark => !prevDark);
  }

  return (
    <div style={theme}>
      <p>useMemo: returns the value of that callback function</p>
      <p>useCallback: returns the callback function</p>
      <div>
        <h5>Example here:</h5>
        <input type="number" value={number} onChange={e => setNumber(+e.target.value)} />
        <button onClick={toggleTheme}>Toggle theme</button>
        <ItemListComponent getItems={getItems} />
      </div>
    </div>
  );
};
