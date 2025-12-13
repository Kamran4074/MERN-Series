import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";

export const AdminContact = ()=>{
    const [contactData,setContactData] = useState([]);
    const{authorizationToken,API} = useAuth();
    const getContactData = async()=>{
        try {
            const response = await fetch(`${API}/api/admin/contact`,{
                method : 'GET',
                headers:{
                    Authorization: authorizationToken,
                }
            });
            
            console.log("Response status:", response.status);
            console.log("Response headers:", response.headers.get('content-type'));
            
            if(response.ok){ //if data is ok store it in useState
                const data = await response.json();
                console.log("Contact data:", data);
                setContactData(data);
            } else {
                const errorText = await response.text();
                console.log("Error response:", errorText);
            }
        } catch (error) {
            console.log("Fetch error:", error);
        }
    };

    useEffect(()=>{
        getContactData();
    },[])

    //function to delete contact
    const deleteContact = async(id)=>{
        try {
            const response = await fetch(`${API}/api/admin/contact/delete/${id}`,
                {
                    method :"DELETE",
                    headers:{
                        Authorization:authorizationToken,
                    }
                }
            );
            const data = await response.json();
            console.log(`contact after delete: ${data}`);
            
            if(response.ok){
                getContactData(); // Refresh the contact list
            }

        } catch (error) {
            console.log(`error in deleteContact function in Admin-Contact in pages ${error}`);
        }
    }
    return (
        <>
        <h1>Contact Data</h1>

        <div className="container admin-user">
            {contactData.map((crrContactdata,index)=>{
                const{ username,email,message } = crrContactdata;
                return (
                    <div key={index}>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{message}</p>
                        <button className="btn" onClick={()=>deleteContact(crrContactdata._id)}>delete</button>
                    </div>
                );
            })}
        </div>
        </>
    )
}