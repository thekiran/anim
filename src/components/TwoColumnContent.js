import React from 'react'

import gsap,{Power0,Elastic} from 'gsap'
const TwoColumnContent = () => {

    React.useEffect(()=>{
        gsap.from(".right-one",{
            scrollTrigger:{
                trigger :".sidebar-right" ,
                // pin:true
            }, 
            x:100,
            duration:1,
            opacity:0,
            scale:0,
            ease: Power0.easeOut
        })

        gsap.from(".right-two",{
            scrollTrigger:{
                trigger :".right-two" ,
                // pin:true
            }, 
            x:100,
            duration:1,
            opacity:0,
            ease: Elastic
        })

        gsap.from(".right-three",{
            scrollTrigger:{
                trigger :".right-three" ,
                // pin:true
            }, 
            x:100,
            duration:1,
            opacity:0,
            // rotate:90,
            rotation:90,
            ease: Elastic
        })


    },[])
    return (
        <React.Fragment>
            <div>
                {/* !-- Content --&gt; */}
                <section id="content">
                    <div className="container sidebar-right">
                        <div className="row">
                            <div className="col-9 col-12-medium">
                                {/* Main Content */}
                                <section className="right-one">
                                    <header>
                                        <h2>Two Column #1</h2>
                                        <h3>A generic two column layout</h3>
                                    </header>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam metus, congue
                                        vel suscipit ut, dignissim non risus. Vestibulum ante est, fringilla nec placerat
                                        eu, vestibulum vitae diam. Integer eget egestas eros. Duis enim erat, mollis quis
                                        lacinia eget, blandit nec ipsum. Donec vitae turpis ipsum. Aliquam mauris libero,
                                        sagittis in eleifend at, mattis imperdiet velit. Donec urna risus, rutrum molestie
                                        varius ac, lacinia sit amet augue. Nam ultrices elementum eros.
                                     </p>
                                    <p>
                                        Sed faucibus viverra ligula, non varius magna semper vitae. Donec eu justo ut ipsum
                                        hendrerit congue nec eu risus. Cum sociis natoque penatibus et magnis dis parturient
                                        montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer
                                        vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam
                                        justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum
                                        elit. Suspendisse fermentum adipiscing nisi, a tempor libero malesuada at. Morbi
                                        lacinia dui adipiscing risus eleifend tincidunt. Proin eu mauris eu tellus eleifend
                                        hendrerit.
            </p>
                                    <p>
                                        Mauris sit amet tellus urna. In facilisis, tortor vitae ultricies egestas, odio
                                        mi rhoncus arcu, quis euismod felis felis et velit. Mauris varius consectetur erat
                                        egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer
                                        vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam
                                        justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum
                                        iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat dui auctor.
            </p>
                                    <p>
                                        Sed faucibus viverra ligula, non varius magna semper vitae. Donec eu justo ut ipsum
                                        hendrerit congue nec eu risus. Cum sociis natoque penatibus et magnis dis parturient
                                        montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer
                                        vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam
                                        justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum
                                        elit. Suspendisse fermentum adipiscing nisi, a tempor libero malesuada at. Morbi
                                        lacinia dui adipiscing risus eleifend tincidunt. Proin eu mauris eu tellus eleifend
                                        hendrerit.
            </p>
                                    <p>
                                        Mauris sit amet tellus urna. In facilisis, tortor vitae ultricies egestas, odio
                                        mi rhoncus arcu, quis euismod felis felis et velit. Mauris varius consectetur erat
                                        egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer
                                        vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam
                                        justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum
                                        iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat dui auctor.
            </p>
                                </section>
                            </div>
                            <div className="col-3 col-12-medium">
                                {/* Sidebar */}
                                <section className="right-two">
                                    <header>
                                        <h2>Magna Phasellus</h2>
                                    </header>
                                    <ul className="link-list">
                                        <li><a href="/">Sed dolore viverra</a></li>
                                        <li><a href="/">Ligula non varius</a></li>
                                        <li><a href="/">Nec sociis natoque</a></li>
                                        <li><a href="/">Penatibus et magnis</a></li>
                                        <li><a href="/">Dis parturient montes</a></li>
                                        <li><a href="/">Nascetur ridiculus</a></li>
                                    </ul>
                                </section>
                                <section className="right-three">
                                    <header>
                                        <h2>Ipsum Dolor</h2>
                                    </header>
                                    <p>
                                        Vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam
                                        iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat.
            </p>
                                    <ul className="link-list">
                                        <li><a href="/">Sed dolore viverra</a></li>
                                        <li><a href="/">Ligula non varius</a></li>
                                        <li><a href="/">Dis parturient montes</a></li>
                                        <li><a href="/">Nascetur ridiculus</a></li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </React.Fragment>
    )
}

export default TwoColumnContent
