import React from 'react'

import gsap from 'gsap'

const Content = () => {
    React.useEffect(()=>{        
        
            let sections = gsap.utils.toArray(".pin");

            gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".pins",
                pin: true,
                scrub: true,
                snap: 1 / (sections.length - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: () => "+=" + document.querySelector(".pins").offsetWidth
            }
            });


    },[])
    return (
        <React.Fragment>
            {/* <!-- Content --&gt; */}
            <section id="content">
                <div className="container">
                    <div className="row pins" >
                        <div className="col-4 col-12-medium pin pin1">
                            {/* // Box #1 */}
                            {/* <section>
                                <header>
                                    <h2>Who We Are</h2>
                                    <h3>A subheading about who we are</h3>
                                </header>
                                <button className="feature-image"><img src="images/pic05.jpg" alt="imag" /></button>
                                <p>
                                    Duis neque nisi, dapibus sed mattis quis, rutrum accumsan magna sed.
                                    Suspendisse eu varius nibh. Suspendisse vitae magna eget odio amet mollis
                                    justo facilisis quis. Sed sagittis amet lorem ipsum.
            </p>
                            </section> */}
                            <section>
                                <header>
                                    <h2>What We Do</h2>
                                    <h3>A subheading about what we do</h3>
                                </header>
                                <ul className="check-list">
                                    <li>Sed mattis quis rutrum accum</li>
                                    <li>Eu varius nibh suspendisse lorem</li>
                                    <li>Magna eget odio amet mollis justo</li>
                                    <li>Facilisis quis sagittis mauris</li>
                                    <li>Amet tellus gravida lorem ipsum</li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-4 col-6-medium col-12-small pin pin2">
                            {/* Box #2 */}
                            <section>
                                <header>
                                    <h2>What People Are Saying</h2>
                                    <h3>And a final subheading about our clients</h3>
                                </header>
                                <ul className="quote-list">
                                    <li>
                                        <img src="images/pic06.jpg" alt="imag" />
                <p>"Neque nisidapibus mattis"</p>
                                        <span>Jane Doe, CEO of UntitledCorp</span>
                                    </li>
                                    <li>
                                        <img src="images/pic07.jpg" alt="imag" />
                <p>"Lorem ipsum consequat!"</p>
                                        <span>John Doe, President of FakeBiz</span>
                                    </li>
                                    <li>
                                        <img src="images/pic08.jpg" alt="imag" />
                <p>"Magna veroeros amet tempus"</p>
                                        <span>Mary Smith, CFO of UntitledBiz</span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        {/* <div className="col-4 col-6-medium col-12-small pin pin3"> */}
                            {/* Box #3 */}
                            {/* <section /> */}
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Content
