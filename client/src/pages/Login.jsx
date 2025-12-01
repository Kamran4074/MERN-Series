import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"
const URL=`http://localhost:5000/api/auth/login`

export const Login=()=>{
    const[user,setUser]=useState({
        email:"",
        password:""
    })

    //use for navigating after state change
    const navigate=useNavigate();
    const {storeTokenInLS}=useAuth(); //soreTokenInLS is defined in Authjsx

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ...user,
            [name]:value
        })
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(user);

        //connecting with backend
        try {
            const response= await fetch(URL, {
                method:"POST",
                headers:{
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(user)
            });

            if(response.ok){

                //storing token
                alert("Login successful!");
                const res_data = await response.json();

                // Store token in localStorage
                storeTokenInLS(res_data.token) //we can write this or below line
                // localStorage.setItem("token", data.token); 

                // Redirect or update state here
                setUser({
                    email:"",
                    password:""
                })

                navigate("/") //from here we can go to dashboard

            } else {
                alert(data.message || "Login failed");
            }

        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong. Please try again.");
        }
    }
    return(
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="login-image">
                            <img src="/images/login.png" 
                            alt="login illustration" 
                            width={400}
                            height={400}
                            />
                        </div>

                        <div className="login-form">
                            <h1 className="main-heading mb-3">Login</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                    type="email"
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
                                    <label htmlFor="password">Password</label>
                                    <input 
                                    type="password"
                                    name="password" 
                                    placeholder="Enter your password"
                                    id="password" 
                                    required
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}
                                    />
                                </div>
                                <br />

                                <button 
                                type="submit"
                                className="btn btn-submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}