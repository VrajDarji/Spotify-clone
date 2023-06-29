import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faHome, faSearch } from "@fortawesome/free-regular-svg-icons";

// library.add(faHome, faSearch);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
