import React, { useContext, useState } from 'react';

const ThemeContextObject = React.createContext();

export function useThemeContext() {
  return useContext(ThemeContextObject);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState();

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  };

  const themeObject = {
    darkTheme,
    toggleTheme
  };

  return (
    <ThemeContextObject.Provider value={themeObject}>
      {children}
    </ThemeContextObject.Provider>
  );
};
