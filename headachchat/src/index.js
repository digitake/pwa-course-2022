import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD:headachchat/src/index.js
import App from './App';
import Chat from './Chat'
import Login from './Login'
import Friendlist from './Friendlist'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Chat/>
=======
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import AuthStateProvider from './context/FirebaseAuthContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthStateProvider>
      <Router />
    </AuthStateProvider>
>>>>>>> 6cda98e408edb661e3fabcc8a82f166da4bdfd69:2T/src/index.js
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();