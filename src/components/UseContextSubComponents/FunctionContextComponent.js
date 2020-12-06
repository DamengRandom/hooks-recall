import React from 'react';
// import React, { useContext } from 'react';
import { useThemeContext } from './ThemeContext';
// import { ThemeContext } from '../UseContextDemo';
export default function FunctionContextComponent() {
  // const darkTheme =  useContext(ThemeContext);
  // const darkTheme = useTheme();
  // const toggleTheme = useThemeToggle();
  const { darkTheme, toggleTheme } = useThemeContext();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>
        Function Theme
      </div>
    </>
  );
};
