import { useState } from "react"
import { useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"

export const Register=()=>{
    const[user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })


    const navigate = useNavigate();
    const {storeTokenInLS, API} = useAuth()

    //handeling the input value
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ...user,
            [name]:value
        })
    }

    
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(user);

        //conneting frontent with backend
        try {
            const response= await fetch(`${API}/api/auth/register`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify(user),
        });


        const res_data= await response.json();
        console.log("res from server", res_data.message);

        //response.ok/response.status===201 etc
        if(response.ok){
            //store data in local storage provided by server
            storeTokenInLS(res_data.token); 

            // make all field emplty
            setUser({
            username:"",
            email:"",
            phone:"",
            password:""
            })
            toast.success("Registration successful!");
            navigate("/login")
        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message);
        }
        } catch (error) {
            console.log("Registration error",error);
        }
    };

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

                        <div className="registration-form">
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