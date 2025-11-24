import { NavLink } from "react-router-dom";

export const Home=()=>{
    return(
       <>
        <main>
                        {/* section one */}
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>We give best IT Solutions</p>
                        <h1>Welcome to Kamronix</h1>
                        <p>
                            Transform your business with cutting-edge technology solutions. 
                            We provide innovative software development, cloud services, and 
                            digital transformation strategies to help your company thrive in 
                            the digital age.
                        </p>
                        {/* <p>
                            Our team of expert developers and consultants are dedicated to 
                            delivering high-quality solutions tailored to your unique business needs.
                        </p> */}
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">connect now</button>
                            </a>
                            <a href="/service">
                                <button className="btn secondary-btn">learn more</button>
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img 
                            src="/images/home.png" 
                            alt="IT Solutions" 
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>

                        {/* second section */}

            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>500+</h2>
                        <p>Projects Completed</p>
                    </div>
                    <div className="div1">
                        <h2>200+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>50+</h2>
                        <p>Expert Team Members</p>
                    </div>
                    <div className="div1">
                        <h2>10+</h2>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </section>

                        {/* third section */}

            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-image">
                        <img 
                            src="/images/design.png" 
                            alt="IT Solutions" 
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="hero-content">
                        <p>Here We Help You</p>
                        <h1>Your Success is Our Mission</h1>
                        <p>
                            Here at Kamronix, we help you transform your business with the right 
                            technology solutions. Whether you need custom software, cloud services, 
                            or digital transformation, we're here to guide you every step of the way.
                        </p>
                        <p>
                            We help you navigate the complex world of technology, making it simple 
                            and accessible. Our team works closely with you to understand your needs 
                            and deliver solutions that truly make a difference.
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Get Started</button>
                            </a>
                            <a href="/service">
                                <button className="btn secondary-btn">Our Services</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
       </>
    )
}