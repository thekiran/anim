import React from 'react'

import Content from '../components/Content'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TwoColLeft from '../components/TwoColLeft'
// import TwoColumnContent from '../components/TwoColumnContent'
const Home = () => {
	//  const [offsetY, setOffsetY] = React.useState(0)
  // const handleScroll = () => setOffsetY(window.pageYOffset) 

  // React.useEffect(()=>{
  //   window.addEventListener("scroll",handleScroll) 
  //   return () => window.removeEventListener("scroll",handleScroll)
  // },[])
    return (
      <div className="home">
        <div className="main" 
        //style={{transform:`translateY(${offsetY * 0.4}px)`}}
        />
          <div className="content" //style={{transform:`translateY(${offsetY * 0.1}px)`}}
          >
          {/*   <nav className="navbar navbar-expand">
			<div className="navbar-cont">
		<a className="navbar-brand" href="#"> Business Landing Pages</a> 
		<div className="navbar-collapse">
			<ul className="navbar-nav">
			<li className="nav-item">
				<a className="nav-link" href="https://thekiran.github.io/money">Money Trasfer 
				<span className="sr-only">(current)</span> 
				</a>
			</li>
			<li className="nav-item active">
				<a className="nav-link" href="#">Beautify</a>
			</li> 
			</ul> 
		</div></div>
		</nav>
		*/}
                <Header />  
                <Features />
          </div>
          <Content />
          <TwoColLeft />
          {/* <TwoColumnContent /> */}
          <Footer />
          </div>
    )
}

export default Home
