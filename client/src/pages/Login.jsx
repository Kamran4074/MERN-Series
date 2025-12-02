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

            const res_data = await response.json();
            console.log("Login response:", res_data);

            if(response.ok){
                //storing token
                alert("Login successful!");

                // Store token in localStorage
                storeTokenInLS(res_data.token);

                // Clear form
                setUser({
                    email:"",
                    password:""
                });

                // Redirect to home
                navigate("/");

            } else {
                alert(res_data.message || "Invalid credentials");
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