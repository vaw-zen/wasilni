import React, { createContext, useEffect, useState} from "react";
import {auth} from '../firebase/firebase'


export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            setUser(user)
            setLoading(false)
        
        })
        return unsubscribe
    },[])
 if(loading) return <p>loading ...</p>
 return(
    <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
 )
}