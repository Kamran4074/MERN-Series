import { useState } from "react"

export const Register=()=>{
    const[user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ...user,
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
    }
    return(
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">

                        <div className="registration-image">
                            <img 
                                src="/images/register.png" 
                                alt="registration illustration" 
                                width={400}
                                height={400}
                            />
                        </div>

                        <div className="regestration-form">
                            <h1 className="main-heading mb-3">Registration form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">UserName</label>
                                    <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="Enter your name"
                                    id="username" 
                                    required
                                    autoComplete="off"
                                    value={user.username}
                                    onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="Enter your email"
                                    id="email" 
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input 
                                    type="number" 
                                    name="phone" 
                                    placeholder="Enter your Phone Number"
                                    id="phone" 
                                    required
                                    autoComplete="off"
                                    value={user.phone}
                                    onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                    type="text" 
                                    name="password" 
                                    placeholder="Enter password"
                                    id="password" 
                                    required
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}
                                    />
                                </div>
                                <br />

                                <button type="submit" className="btn btn-submit">Register Now</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}