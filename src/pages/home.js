import React from 'react'

import Content from '../components/Content'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
const Home = () => {
	 const [offsetY, setOffsetY] = React.useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset) 

  React.useEffect(()=>{
     window.addEventListener("scroll",handleScroll) 
     return () => window.removeEventListener("scroll",handleScroll)
  },[])
    return (
      <div className="home">
        <div className="main" 
        style={{transform:`translateY(${offsetY * 0.7}px)`}}
        />
          <div className="content" //style={{transform:`translateY(${offsetY * 0.5}px)`}}
          >
          <Header />  
          <Features />
          <Content />
          <Footer />
          </div>
          </div>
    )
}

export default Home
