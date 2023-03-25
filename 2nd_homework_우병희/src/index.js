import React from 'react';
import ReactDOM from 'react-dom';
// reactDom 파일을가지고 오겟다
import './index.css';
import App from './App';
// App.js로 부터 다가 App에 대한 import
// BrowserRouter라는 패키지로
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
{/*routes가 browserrouter에전달*/}