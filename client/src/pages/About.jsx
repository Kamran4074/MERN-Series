import { Analytics } from "../components/Analytics"
import { useAuth } from "../store/auth"

export const About = () => {
    const { user } = useAuth();
    
    return (
        <>
            <main>
                                {/* first section */}

                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Hi {user ? user.username : "Guest"}!</p>
                            <p>Welcome to Kamronix</p>
                            <h1>Why Choose Us?</h1>
                            <p>
                                At Kamronix, our goal is to deliver high-quality and modern technology 
                                services that help businesses grow, perform, and succeed in the digital world.
                            </p>
                            <p>
                                We focus on building reliable, scalable, and efficient software solutions
                                with clear communication, transparency, and customer-first approach.
                            </p>
                            
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
                <Analytics/>
            </main>
        </>
    )
}