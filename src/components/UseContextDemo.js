// import React, { useState } from 'react';
import React from 'react';
import FunctionContextComponent from './UseContextSubComponents/FunctionContextComponent';
// import ClassContextComponent from './UseContextSubComponents/ClassContextComponent';
// import { ThemeProvider } from './UseContextSubComponents/ThemeContext';

// export const ThemeContext = React.createContext();

// export default function UseContextDemo() {
//   const [darkTheme, setDarkTheme] = useState(true);

//   function toggleTheme() {
//     setDarkTheme(prevDarkTheme => !prevDarkTheme);
//   };

//   return (
//     <>
//       <ThemeContext.Provider value={darkTheme}>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//         <FunctionContextComponent />
//         <ClassContextComponent />
//       </ThemeContext.Provider>
//     </>
//   );
// };

export default function UseContextDemo() {
  return (
    // <ThemeProvider> I imported from App component level, so all compoennts can use context values
      <FunctionContextComponent />
    // </ThemeProvider>
  );
};
