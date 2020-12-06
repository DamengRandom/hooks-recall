import React from 'react';
import './App.css';
// import MemoDemo from './components/MemoDemo';
// import MemoDemoSecond from './components/MemoDemoSecond';
// import UseMemoDemo from './components/UseMemoDemo';
// import UseRefDemo from './components/UseRefDemo';
// import UseContextDemo from './components/UseContextDemo';
import { ThemeProvider } from './components/UseContextSubComponents/ThemeContext';
// import UseReducerDemo from './components/UseReducerDemo';
import UseCallbackDemo from './components/UseCallbackDemo';
import CustomeHookDemo from './components/CustomHookDemos/CustomeHookDemo';

function App() {
  React.useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer qhtfs87hjnc12kkos");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var requestOptions = {
      method: 'GET',
      credentials: 'include',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("/v2/configurations", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className="App">
      <ThemeProvider>
        {/* <MemoDemo /> */}
        {/* <MemoDemoSecond /> */}
        {/* <UseMemoDemo /> */}
        {/* <UseRefDemo /> */}
        {/* <UseContextDemo /> */}
        {/* <UseReducerDemo /> */}
        {/* <UseCallbackDemo /> */}
        <CustomeHookDemo />
      </ThemeProvider>
    </div>
  );
}

export default App;
