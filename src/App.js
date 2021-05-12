import React from 'react';
import './App.css';
// import MemoDemo from './components/MemoDemo';
// import MemoDemoSecond from './components/MemoDemoSecond';
// import UseMemoDemo from './components/UseMemoDemo';
// import UseRefDemo from './components/UseRefDemo';
// import UseContextDemo from './components/UseContextDemo';
import { ThemeProvider } from './components/UseContextSubComponents/ThemeContext';
// import UseReducerDemo from './components/UseReducerDemo';
// import UseCallbackDemo from './components/UseCallbackDemo';
// import CustomHookDemo from './components/CustomHookDemos/CustomHookDemo';
// import AnotherUseCallbackDemo from './components/AnotherUseCallbackDemo/AnotherUseCallbackDemo';
import TheParent from './components/useMemoUseCallbackThirdExample/TheParent';
// import ExampleOne from "./components/useReducerExample/ExampleOne";
// import ExampleTwo from "./components/useReducerExample/ExampleTwo";

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
        {/* <CustomHookDemo /> */}
        {/* <AnotherUseCallbackDemo /> */}
        <TheParent />
        {/* <ExampleOne /> */}
        {/* <ExampleTwo /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
