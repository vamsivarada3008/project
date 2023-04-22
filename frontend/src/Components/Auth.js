import React from 'react'
import { useState,useContext,createContext } from "react";
const AuthContext = createContext(null);
export const AuthProvider=({children})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const login=(user)=>{
        setEmail(user.email);
        setPassword(user.password);
    }
    const logout=()=>{
        setEmail(null)
        setPassword(null)
    }
    return <AuthContext.Provider value={{email,password,login,logout}}>
        {children}
    </AuthContext.Provider>
}
export const useAuth=()=>{
    return useContext(AuthContext);
}