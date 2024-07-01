import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();
export default function Auth({children}) {
    const initialAuthuser =localStorage.getItem('User');
    const [authUser,setAuthUser]= useState(
        initialAuthuser ? JSON.parse(initialAuthuser): undefined
    );

  return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
   
  )
}

export const useAuth =()=>useContext(AuthContext);
