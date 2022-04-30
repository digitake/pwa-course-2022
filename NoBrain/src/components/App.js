import '../css/App.css';
import Userlist from './Userlist.js';
import React from 'react';

function App(props) {
  return (
    <div className="App">
      <div className="content">
        {props.children}
      </div>
      <Userlist />
    </div>
  );
}

export default App;
