import React, { useState, useEffect, useMemo } from "react";

export default function UseCallbackDemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() =>
    expensoveCostFunc(number), [number]);
    // useMemo is for performance consideration, avoid unnecessary re-renders, eg: functions, components
    // when to use:
    // - expensive cost function needs to use it for avoiding re-rendering (expensoveCostFunc)
    // - reference whether keeps the same or not, if not, cause re-render (themeStyles)
  const themeStyles = useMemo(() => ({
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  }), [dark]);

  useEffect(() => {
    console.log("theme change triggered");
  }, [themeStyles]); // only reference object: themeStyles get changed, actually is dark value get changed, cause re-render, otherwise, no re-render !!!

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function expensoveCostFunc(num) {
  console.log('Calling slow function');
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
