import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";

export const AdminUser = ()=>{
    const [users, setUsers] = useState([]);
    const {authorizationToken} = useAuth();

    const getAllUsersData = async() =>{
        try {
            const response = await fetch('http://localhost:5000/api/admin/users',
                {
                    method : "GET",
                    headers :{
                        Authorization: authorizationToken
                    }
                }
            );
            const data = await response.json();
            console.log(`users :`, data);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getAllUsersData();
    },[])
    return <>
    <section className="admin-user-section">
        <div className="container">
            <h1>Admin User Data</h1>
        </div>
        <div className=" container admin-user"> 
            <table>
                <thead> {/* table head */}
                    <tr> {/* table row */}
                        <th>Name</th> {/* table heading */}
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody> {/* table body */}

                    {users.map((crrUser,index)=>{
                        return(
                            <tr key={index}> {/* table row */}
                                <td>{crrUser.username}</td> {/* table data */}
                                <td>{crrUser.email}</td>
                                <td>{crrUser.phone}</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    </section>
    </>
}