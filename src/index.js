import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TextInputWithFocusButton from './TextInputWithFocusButton';
import Todo from'./Todo';
import TodoList from './TodoList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <>
    <Todo/>
    <TextInputWithFocusButton/>
    </>



  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
