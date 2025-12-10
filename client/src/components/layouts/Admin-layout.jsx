import { Outlet,NavLink } from 'react-router-dom';
import { FaUser, FaPhone, FaServicestack, FaHome } from "react-icons/fa";

export const AdminLayout=()=>{
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