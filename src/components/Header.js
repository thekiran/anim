import React from 'react'
import {motion} from 'framer-motion'

import banner from '../imglg/manlg.svg'

const Header = () => {
    return (
<section style={{background:'rgba(0,0,0,0.7)'}} id="header">
  <div className="container">
    <div className="row">
      <div className="col-12">
         {/* Logo */}
        <h1><a href="/anim" id="logo">Animated Beauty</a></h1>
         {/* Nav */}
        <nav id="nav">
          <a href="/anim">Homepage</a>
          <a href="/">Three Column</a>
          <a href="/">Two Column #1</a>
          <a href="/">Two Column #2</a>
          <a href="/">One Column</a>
        </nav>
      </div>
    </div>
  </div>
  <div id="banner">
    <div className="container">
      <div className="row">
        <div className="col-6 col-12-medium">
          {/* Banner Copy */}
          <p>We do something really useful, important, and unique. Learn all about it here ...</p>
          <a href="/anim" className="button-large">Go on, click me!</a>
        </div>
        <div className="col-6 col-12-medium imp-medium">
          {/* Banner Image */}
          <button style={{margin:'0px 5px 5px 150px'}} className="bordered-feature-image"><motion.img className="hero" drag dragConstraints={{ top: -10,
      left: -10,
      right: 10,
      bottom: 10,}} src={banner} alt="imag" /></button>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Header
