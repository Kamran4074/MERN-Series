import { Outlet,NavLink, Navigate } from 'react-router-dom';
import { FaUser, FaPhone, FaServicestack, FaHome } from "react-icons/fa";
import { useAuth } from '../../store/auth';

export const AdminLayout=()=>{
    const { user ,isLoading} = useAuth();

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(!user.isAdmin){
        return <Navigate to="/"/>
    }
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users"> <FaUser /> user</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts"><FaPhone /> contacts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service"><FaServicestack /> services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/"><FaHome /> Home</NavLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
}