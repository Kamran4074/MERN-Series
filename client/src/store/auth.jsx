import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); //for user admin
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIN ", isLoggedIn);


  // tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };


  // JWT AUTHENTICATION - to get the currently loggedIN user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data ", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.error("Error fetching user data - Status:", response.status);
        // Clear invalid token
        setToken("");
        localStorage.removeItem("token");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoading(false);
    }
  };

  // to fetch the services data from the database
  const getServices = async () => {
    // TODO: Implement service route in backend
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };

  useEffect(() => {
    getServices(); // Commented out until backend route is created
    if(token) {
      userAuthentication();
    } else {
      setIsLoading(false);
    }
  }, [token]);


  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        services,
        authorizationToken,
        isLoading,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};