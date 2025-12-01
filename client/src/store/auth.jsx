
import { createContext, useContext, useState } from "react";

export const AuthContext=createContext(); //context is ready


export const AuthProvider=({children})=>{ //provider is ready
    const [token,setToken]=useState(localStorage.getItem("token"))

    // stores token in local storage
    const storeTokenInLS = (serverToken)=>{
        setToken(serverToken); // Update state
        return localStorage.setItem("token",serverToken); // Fixed: setItem not getItem
    };

    //to use in navigation bar
    let isLoggedIn = !!token; //if token is there it will return true

    //logout functionality
    const LogoutUser=()=>{
        setToken('');
        return localStorage.removeItem('token');
    };

    //store token in local storage
    return <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser}}> 
        {children}
        </AuthContext.Provider>
    }

//this will work as delevery boy and provide data to every one who need this
export const useAuth=()=>{    
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw("useAuth use outside the provider")
    }
    return authContextValue;
}