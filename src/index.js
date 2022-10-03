import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TestApp from './pages/TestApp/TestApp';
import {
    BrowserRouter ,
    Routes,
    Route
  } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import TextInputWithFocusButton from './TextInputWithFocusButton';
import WordList from'./pages/WordList/WordList';
import App from './App';
import ForgetList from './pages/ForgetList/ForgetList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />}>
      <Route path="wordlist" element={<WordList />} />
      <Route path="everydaylist" element={<TestApp />} />
      <Route path="forgetlist" element={<ForgetList />} />
        {/* 
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>,
 
    // <>
    // <Todo/>
    // <TestApp/>
    // <App/>
    // {/* <TextInputWithFocusButton/> */}
    // </>



  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
