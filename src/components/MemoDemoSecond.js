import React from 'react';

const MyContext = React.createContext();

// writing own functional component and put login inside functional component and pass children as props to avoid the render children components issue: learnt from: https://www.youtube.com/watch?v=CDGBTjMBJzg

const MyProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  theme === 'light' ?
    document.body.style.backgroundColor = "#ddd"
    : 
    document.body.style.backgroundColor = "#db2938";
  const value = {
    theme,
    nextTheme,
    toggleTheme: () => {
      setTheme(nextTheme);
    }
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  )
}

function MemoDemoSecond() {
  return <MyProvider>
    <DirectChild />
  </MyProvider>
}

const DeeperChild = () => {
  console.log('Deeper child');
  const { nextTheme, toggleTheme } = React.useContext(MyContext);
  return (
    <div>
      <p>Deeper Child</p>
      <button onClick={toggleTheme}>{nextTheme}</button>
    </div>
  )
};

const DirectChild = () => {
  console.log('Direct child');
  return (
    <nav>
      <DeeperChild />
    </nav>
  )
};

export default MemoDemoSecond;
