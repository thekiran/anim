import React from 'react'

const Header = () => {
    return (
<section id="header">
  <div className="container">
    <div className="row">
      <div className="col-12">
         {/* Logo */}
        <h1><a href="/" id="logo">Animated Beauty</a></h1>
         {/* Nav */}
        <nav id="nav">
          <a href="/">Homepage</a>
          <a href="/threecolumn.html">Three Column</a>
          <a href="/twocolumn1.html">Two Column #1</a>
          <a href="/twocolumn2.html">Two Column #2</a>
          <a href="/onecolumn.html">One Column</a>
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
          <a href="/" className="button-large">Go on, click me!</a>
        </div>
        <div className="col-6 col-12-medium imp-medium">
          {/* Banner Image */}
          <a href="/" className="bordered-feature-image"><img src="/images/banner.jpg" alt="imag" /></a>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Header
