import React,{useContext, useState, useEffect} from "react";
import {auth} from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,currentUser,onAuthStateChanged,sendPasswordResetEmail,  updateEmail, updatePassword , signOut } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)

    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)

    }
    function logOut(){
        return signOut(auth)
    }
    function reset(email){
        return sendPasswordResetEmail(auth, email);
    }
    function upEmail(email){
        return updateEmail(auth.currentUser, email)
    }
    function upPassword(password){
        return updatePassword( auth.currentUser, password)
    }

    useEffect(()=>{

       const unsubscribe = onAuthStateChanged(auth, user =>{
         setCurrentUser(user);  
         setLoading(false); 
           
        })

        return unsubscribe;

    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logOut,
        reset,
        upEmail,
        upPassword
    }
    
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
    
}

