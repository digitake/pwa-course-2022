import '../css/App.css';
import Tabbar from './Tabbar.js';
import React from 'react'
import ReactDOM from 'react-dom'
function App(props) {
  return (
    <div className="App">
      <div className="content">
        {props.children}
      </div>
      <Tabbar/>
    </div>
  );
}

export default App;
