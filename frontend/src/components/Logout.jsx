import React from "react";
import { useAuth } from "./Context/Auth";
import toast from "react-hot-toast";

export default function Logout() {
    const[authUser,setAuthUser]= useAuth();
    const handellogout = ()=>{
try {
    setAuthUser({
        ...authUser,
        user:null
    })
    localStorage.removeItem("User")
    toast.success("Logout successfully")
    setTimeout(()=>{
        window.location.reload();
      },3000)
} catch (error) {
    toast.error("Error  :"+error.response.data.error)
setTimeout(()=>{

},3000)
}
    }
  return (
    <div>
      <button className="ms-3 py-3 px-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handellogout}>
        Logout
      </button>
    </div>
  );
}
