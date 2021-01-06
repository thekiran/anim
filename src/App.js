import React from 'react';
import Home from './pages/home'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';


import './App.css';

const App = () => {
  gsap.registerPlugin(ScrollTrigger)
  React.useEffect(()=>{
    // const link = document.createElement('link')
    // <link rel="stylesheet" href="/css/main.css">
    // link.rel = "stylesheet"
    // link.href = "/css/main.css"
    // link.alt = "true"
    // const body = document.querySelector('body')
    // body.appendChild(link)
    // console.log(body,link)
  },[])
  return (
    <div className="App"> 
        <Home />
    </div>
  );
}

export default App;
