import React from 'react';
// import 'materialize-css/dist/js/materialize.min.js';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.scss'
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
   
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

