import React from 'react';
import ReactDOM from 'react-dom'; 
import './css/base.css'
import './css/main.css'
import './index.css';
import App from './App'; 


const main = document.querySelector('.sweep-head')
const showLoader = () => main.classList.remove('sweep--hide')
const hideLoader = () => main.classList.add('sweep--hide')

ReactDOM.render(
  <React.StrictMode>
  <App hideLoader={hideLoader} showLoader={showLoader} />
  </React.StrictMode>,
  document.getElementById('root')
);
 