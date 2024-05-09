import React from 'react'
import { useAuth } from '../Context/Authprovider'

function Logout() {

    const [authUser,setauthUser]=useAuth();
    const handleLogout=()=>{
        try {
            setauthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("users");
            alert("Logout successfully")
            window.location.reload();
        } catch (error) {
            alert("Logout error"+error);
        }
    }
  return (
    <div>
        <button onClick={handleLogout}
        className='px-3 py-2 text-white rounded-md cursor-pointer bg-red-200'>Logout</button>
    </div>
  )
}

export default Logout