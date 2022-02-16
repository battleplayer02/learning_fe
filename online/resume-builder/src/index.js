import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCzYWh2fzKY6MwfWI9_yMQzyBUpLFWBCA0",
  authDomain: "resume-builder-8c0b0.firebaseapp.com",
  projectId: "resume-builder-8c0b0",
  storageBucket: "resume-builder-8c0b0.appspot.com",
  messagingSenderId: "1023864966191",
  appId: "1:1023864966191:web:d1b63e6799dc926ae1cada",
  measurementId: "G-86P42SYPEW"
};

const app = initializeApp(firebaseConfig);
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
