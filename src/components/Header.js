import React from 'react'
import {motion} from 'framer-motion'
import gsap,{Elastic} from 'gsap'

import banner from '../imglg/manlg.svg'

const Header = () => {
  React.useEffect(()=>{
    gsap.from(".head-cont",{y:300,stagger:0.1,duration:1})
    gsap.from(".head-cont-banner",{y:300,stagger:0.5,duration:2})
    gsap.from(".head-logo",{scale:0,stagger:0.1,duration:2,
      // ease:Elastic.easeInOut
    })
  },[])
    return (
<section 
//style={{background:'rgba(0,0,0,0.7)'}} 
id="header">
  <div className="container n">
    <div className="row">
      <div className="col-12">
         {/* Logo */}
        <h1><a href="/anim" id="logo"> <span className="head-logo">Animated</span> <span className="head-logo">Beauty</span> </a></h1>
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
          <p id="head-p">
           <span className="head-cont">We </span> 
           <span className="head-cont">do </span> 
           <span className="head-cont">something </span> 
           <span className="head-cont">really </span> 
           <span className="head-cont">useful, </span> 
           <span className="head-cont">important, </span> 
           <span className="head-cont">and unique. </span> 
           <span className="head-cont">Learn </span> 
           <span className="head-cont">all </span> 
           <span className="head-cont">about </span> 
           <span className="head-cont">it here ...</span> 
             </p>
          <a href="/anim" className="button-large">
            
           <span className="head-cont">Go on, </span> 
           <span className="head-cont">click me! </span> 
            </a>
        </div>
        <div style={{overflow:"hidden"}} className="col-6 col-12-medium imp-medium">
          {/* Banner Image */}
          <button style={{margin:'0px 5px 5px 150px'}} className="bordered-feature-image head-cont-banner"><motion.img className="hero head-cont-banner" drag dragConstraints={{ top: -10,
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