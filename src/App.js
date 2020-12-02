import React from 'react';
import './App.css';
// import MemoDemo from './components/MemoDemo';
// import MemoDemoSecond from './components/MemoDemoSecond';
// import UseMemoDemo from './components/UseMemoDemo';
import UseRefDemo from './components/UseRefDemo';

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
      {/* <MemoDemo /> */}
      {/* <MemoDemoSecond /> */}
      {/* <UseMemoDemo /> */}
      <UseRefDemo />
    </div>
  );
}

export default App;
