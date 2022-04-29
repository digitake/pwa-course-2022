import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import AuthStateProvider from './context/FirebaseAuthContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthStateProvider>
      <Router />
    </AuthStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').then(registeration => {
    console.log('SW registered', registeration)
  }
  )
}
