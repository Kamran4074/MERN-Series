export const Contact=()=>{
    return(
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heading">Contact Us</h1>
            </div>

            {/* contact page main */}
            <div className="conatiner grid grid-two-cols">
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
        </section>
    )
}