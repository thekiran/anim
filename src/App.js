import React from 'react';
import Home from './pages/home'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';


import './App.css';

const App = ({hideLoader}) => {
  gsap.registerPlugin(ScrollTrigger)
  React.useEffect(() => {
    hideLoader()
  },
  [ hideLoader ])
  return (
    <div className="App"> 
        <Home />
    </div>
  );
}

export default App;
