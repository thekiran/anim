import React from 'react'
// import {motion} from 'framer-motion'
import gsap  from 'gsap'
 
// import { Controller, Scene } from 'react-scrollmagic';


import banner from '../imglg/main_illustration.png'
import people from '../imglg/main_people.png'

import '../css/head.css'

const Header = () => {
  React.useEffect(()=>{
    anim()
    const headHide = (el) => {
      console.log(el)

      el.trigger.classList.add('anim')
    }
    const headShow = (el) => {
      console.log(el)

      el.trigger.classList.remove('anim')
    }


    let tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#header',
        start:"+=100",
        end:"bottom center",
        // markers:true,
        scrub:true,
        pin:true,
        onLeaveBack: headShow,
        onLeave: headHide,
        pinSpacing:true
      }
    })
    .to("#head-p",{xPercent:700,yPercent:300,scale:30,opacity:0.1,rotate:45,duration:7},1)
    .to("#banner-cont",{xPercent:200,yPercent:-100,scale:2,rotate:45,opacity:0.1,duration:3,delay:2},1)
    // .to("#head-p",{scale:0},1)

  })
  // const head = React.useRef(null)
  const anim = () => {
    gsap.from(".head-cont",{y:200,duration:.1,stagger:0.1,})
    gsap.from(".head-cont-banner",{y:300,stagger:0.5,duration:.5})
    gsap.from(".head-logo",{scale:0,stagger:0.1,duration:2 }) 
    
  }
  
    return (
<section 
// style={{paddingBottom:'10em'}} 
id="header" 
// className="act"ref={head}
className="container-home"
 > 
  <div className="nav container n">
  <div className="row " 
// style={{paddingBottom:'10em'}} 
>
     <h1><a href="/anim" id="logo"><span className="head-logo">Beautify</span> </a></h1>
     {/* <nav id="nav">
          <a href="/anim">Login</a>
          <a href='/anim'>Signup</a>
        </nav> */}
    </div>
    </div>
   
  <div id="banner">
    <div className="container-ban">
      <div className="row" id="head-ro">
        <div className="col-6 col-12-medium cont-ban">
          {/* Banner Copy */}
          <p id="head-p">
           <span className="head-cont">  
           We
            </span> 
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
             <div id="banner-cont">
             <a href="/anim" className="button-large">
            
            <span className="head-cont">Go on, </span> 
            <span className="head-cont">click me! </span> 
             </a>
             {/* <img className="hero head-cont-people" src={people} alt="imag" /> */}
   
             </div>
        
        </div> 
          {/* <div style={{overflow:"hidden"}} className="col-6 col-12-medium imp-medium">
        Banner Image 
          <button style={{margin:'0px 5px 5px 150px'}} className="bordered-feature-image head-cont-banner"><motion.img className="hero head-cont-banner" drag dragConstraints={{ top: -10,
      left: -10,
      right: 10,
      bottom: 10,}} src={banner} alt="imag" /></button>
        </div>*/}
         {/* <div style={{overflow:"hidden"}} className="img-hero">
      
      <img className="hero head-cont-banner" src={banner} alt="imag" />
      </div> */}
      </div> 
    </div>
  
  </div>
</section>
    )
}

export default Header
