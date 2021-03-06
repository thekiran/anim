import React from 'react'

const Footer = () => {
    const [obs,setObs] = React.useState('')
    // let obs = "anim"
    const observer = React.useRef(
		new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					console.log(entries[0])
                    setObs('')
				} else {
                    setObs('anim')
				}
			},
			{
                root: document.querySelector('.footer-space'),
				rootMargin: '300px 0px 100px 0px',
				// threshold: 1
			}
		)
	)
	// eslint-disable-next-line
	const rev = React.useCallback((node) => {
		
		if(observer.current && node !== null)  observer.current.observe(node)
	}) 
    return (
        <React.Fragment>
            <div ref={rev}  className="footer-space"></div>
            <section className={obs} style={{background:'rgba(0,0,0,0.1)'}} id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-8 col-12-medium">
                            {/* Links */}
                            <section>
                                <h2>Links to Important Stuff</h2>
                                <div>
                                    <div className="row">
                                        <div className="col-3 col-12-small">
                                            <ul className="link-list last-child">
                                                <li><a href="/">Neque amet dapibus</a></li>
                                                <li><a href="/">Sed mattis quis rutrum</a></li>
                                                <li><a href="/">Accumsan suspendisse</a></li>
                                                <li><a href="/">Eu varius vitae magna</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-3 col-12-small">
                                            <ul className="link-list last-child">
                                                <li><a href="/">Neque amet dapibus</a></li>
                                                <li><a href="/">Sed mattis quis rutrum</a></li>
                                                <li><a href="/">Accumsan suspendisse</a></li>
                                                <li><a href="/">Eu varius vitae magna</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-3 col-12-small">
                                            <ul className="link-list last-child">
                                                <li><a href="/">Neque amet dapibus</a></li>
                                                <li><a href="/">Sed mattis quis rutrum</a></li>
                                                <li><a href="/">Accumsan suspendisse</a></li>
                                                <li><a href="/">Eu varius vitae magna</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-3 col-12-small">
                                            <ul className="link-list last-child">
                                                <li><a href="/">Neque amet dapibus</a></li>
                                                <li><a href="/">Sed mattis quis rutrum</a></li>
                                                <li><a href="/">Accumsan suspendisse</a></li>
                                                <li><a href="/">Eu varius vitae magna</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-4 col-12-medium imp-medium">
                            {/* Blurb */}
                            <section>
                                <h2>An Informative Text Blurb</h2>
                                <p>
                                    Duis neque nisi, dapibus sed mattis quis, rutrum accumsan sed. Suspendisse eu
                                    varius nibh. Suspendisse vitae magna eget odio amet mollis. Duis neque nisi,
                                    dapibus sed mattis quis, sed rutrum accumsan sed. Suspendisse eu varius nibh
                                    lorem ipsum amet dolor sit amet lorem ipsum consequat gravida justo mollis.
          </p>
                            </section>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div id="copyright">
                    © Untitled. All rights reserved. | Design: <a href="http://html5up.net">HTML5 UP</a>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Footer
