import { useState } from "react"

export const Contact=()=>{

    const[contact,setContact]=useState({
        username:"",
        email:"",
        message:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(contact);
    }
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setContact({
            ...contact,
            [name]:value,

        })
    }
    return(
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heading">Contact Us</h1>
            </div>

            {/* contact page main */}
            <div className="container grid grid-two-cols">
                <div className="contact-img">
                    <img src="/images/support.png" alt="img" />
                </div>

                {/* actual content */}
                <section className="section-form">
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="username">username</label>
                            <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            autoComplete="off"
                            onChange={handleInput}
                            value={contact.username}
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            autoComplete="off"
                            onChange={handleInput}
                            value={contact.email}
                            required
                            />
                        </div>

                        <div>
                            <label htmlFor="message">message</label>
                            <textarea 
                            name="message" 
                            id="message"
                            cols="30"
                            rows="10"
                            autoComplete="off"
                            onChange={handleInput}
                            value={contact.message}
                            required
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </section>
            </div>
            <section className="mb-3">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.030759492136!2d77.5024442098552!3d28.478620290954417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea6553e386df%3A0x22b36be7a1c39b70!2sBeta%20Plaza%2C%20Block%20B%2C%20Beta%20I%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1764357309488!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                ></iframe>
            </section>
        </section>
    )
}