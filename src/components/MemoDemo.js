import React from 'react';

const MyContext = React.createContext();

function MemoDemo() {
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
  return <MyContext.Provider value={value}>
    <DirectChild />
  </MyContext.Provider>
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

// with memo: the DirectChild won't get rendered !!!
// const DirectChild = React.memo(() => {
//   console.log('Direct child');
//   return (
//     <nav>
//       <DeeperChild />
//     </nav>
//   )
// });

// without memo: the DirectChild will get rendered everytime when parent component updated!!!
// const DirectChild = () => {
//   console.log('Direct child');
//   return (
//     <nav>
//       <DeeperChild />
//     </nav>
//   )
// };

const DirectChild = React.memo(() => {
  console.log('Direct child');
  return (
    <nav>
      <DeeperChild />
    </nav>
  )
});

export default MemoDemo;
