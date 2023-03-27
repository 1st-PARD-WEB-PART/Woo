import React from 'react';
import ReactDOM from 'react-dom';
//react 파일 처음 만들떄 react client 되있어서
// react-dom이랑 react-dom client가 동시에 있으면 오류.
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById('root')
);



