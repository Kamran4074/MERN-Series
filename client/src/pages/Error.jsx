import { NavLink } from "react-router-dom";

export const Error = () => {
    return (
        <>
            <section id="error-page">
                <div className="content">
                    <h2 className="header">404</h2>
                    <h4>Oops! Page Not Found</h4>
                    <p>
                        The page you are looking for might have been removed, 
                        had its name changed, or is temporarily unavailable.
                    </p>
                    <div className="btns">
                        <NavLink to="/">Return Home</NavLink>
                        <NavLink to="/contact">Report Problem</NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};