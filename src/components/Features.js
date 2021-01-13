import React from 'react'

import gsap, { Power4 } from 'gsap'
// import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion'

import slack from '../imglg/cargo/cargolg.svg'
import hors from '../imglg/globelg/globelg.svg'
import cof from '../imglg/hand/hand-moneylg.svg'
import moon from '../imglg/moonlg/moonlg.svg'

const Features = () => {
  React.useEffect(() => {
    // let proxy = { skew: 0 },
    // skewSetter = gsap.quickSetter(".bordered-feature-image", "skewY", "deg"), // fast
    // clamp = gsap.utils.clamp(-15, 15); // don't let the skew go beyond 20 degrees. 

    // ScrollTrigger.create({
    //   onUpdate: (self) => {
    //     let skew = clamp(self.getVelocity() / -300);
    //     // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    //     if (Math.abs(skew) > Math.abs(proxy.skew)) {
    //       proxy.skew = skew;
    //       gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    //     }
    //   }
    // });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    // gsap.set(".skew-on-scroll", {transformOrigin: "right center", force3D: true});
    gsap.from(".skew-on-scroll", { scrollTrigger: ".skew-on-scroll", rotate: -360, duration: .5 })
    gsap.from(".skew-on-scroll-t", { scrollTrigger: ".skew-on-scroll-t", rotate: -360, duration: .5 })
    gsap.from(".scale-on-scroll", { scrollTrigger: ".scale-on-scroll", scale: 0, duration: .5, ease: Power4.easeInOut })
    gsap.from(".scale-on-scroll-f", { scrollTrigger: ".scale-on-scroll-f", scale: 0, duration: .5, ease: Power4.easeInOut })

    gsap.from(".feat-cont", { scrollTrigger: ".feat-cont", y: 300, stagger: 0.1, duration: .5 })

  }, [])

  return (
    <React.Fragment>
      {/* Features */}
      <section id="features">
        <div className="container">
          <div className="row">

            <div className="feature">
              {/* Feature #2 */}
              <section>
                <motion.button
                  whileHover={{
                    scale: .7,
                    rotateZ: -360,
                    transition: { duration: .4 },
                  }} className="bordered-feature-image"><img src={hors} className="skew-on-scroll " alt="imag" /></motion.button>
                <div className="mar" >   <h2>Responsive You Say?</h2>
                  <p className="feat-cont">
                    Yes! Halcyonic is built to be fully responsive so it looks great
                    at every screen size, from desktops to tablets to mobile phones.
          </p></div>
              </section>
            </div>
            <div className="feature">
              {/* Feature #3 */}
              <section>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    // transition: { duration: .1 },
                  }} className="bordered-feature-image"><img src={cof} className="scale-on-scroll" alt="imag" /></motion.button>
                <div className="mar"> <h2>License Info</h2>
                  <p className="feat-cont">
                    Halcyonic is licensed under the <a href="http://html5up.net/license">CCA</a> license,
            so use it for personal/commercial use as much as you like (just keep
            our credits intact).
          </p></div>
              </section>
            </div>
            <div className="feature">
              {/* Feature #4 */}
              <section>
                <motion.button
                  whileHover={{
                    scale: .7,
                    rotateZ: -130,
                    transition: { duration: .2 },
                  }} className="bordered-feature-image"><img src={moon} className="skew-on-scroll-t " alt="Suspendisse" /></motion.button>
                <div className="mar">
                  <h2>Volutpat etiam aliquam</h2>
                  <p className="feat-cont">
                    Duis neque nisi, dapibus sed mattis quis, rutrum accumsan sed. Suspendisse
                    eu varius nibh. Suspendisse vitae magna mollis.
          </p></div>
              </section>
            </div>
            <div className="feature">
              {/* Feature #1 */}
              <section style={{ color: '#000' }}>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    // transition: { duration: .1 },
                  }}
                  className="bordered-feature-image"><img className="scale-on-scroll-f" src={slack} alt="imag" /></motion.button>
                <div className="mar"><h2>Welcome to Halcyonic</h2>
                  <p className="feat-cont">
                    This is <strong>Halcyonic</strong>, a free site template
            by <a href="http://twitter.com/ajlkn">AJ</a> for
            <a href="http://html5up.net">HTML5 UP</a>. It's responsive,
            built on HTML5 + CSS3, and includes 5 unique page layouts.
          </p></div>
              </section>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  )
}

export default Features
