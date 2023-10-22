//https://www.geeksforgeeks.org/how-to-send-a-user-verification-mail-in-web-and-firebase/?ref=ml_lbp
//https://www.geeksforgeeks.org/how-to-get-profile-of-signed-in-user-in-web-and-firebase/

'use client'

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  getAuth
  
} from "firebase/auth";
import { auth } from "../firebase/config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [newData, setNewData] = useState(false)
  const [mailChanger, setmailChanger] = useState(false)
  const [user, setUser] = useState(null);
  const [signinMethod, setsigninMethod] = useState('')
  const [emailVerification, setEmailVerification] = useState('')
  const [onboardingdata, setOnboardingdata] = useState({})
  const loginApi = (email, pass) =>{
    try{
      let res = signInWithEmailAndPassword(auth, email, pass)
      return res
    }catch(err){
      return err
    }
  }

  const signinApi = (email, pass) =>{
    try{
      let res = createUserWithEmailAndPassword(auth, email, pass)
      
      setsigninMethod('email')
      localStorage.setItem("methodd", signinMethod)
      return res
    }catch(err){
      return err
    }
  }



  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    setsigninMethod('google')
    localStorage.setItem("methodd", signinMethod)
  };

  const logOut = () => {
    signOut(auth);
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);


  useEffect(()=>{
    const auth = getAuth()
  
    if (newData){
      onAuthStateChanged(auth, (user) => {
        if (user){
          setEmailVerification(user.emailVerified)
        }
      })
    }setNewData(false)
  }, [newData])


  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut, signinApi, loginApi, signinMethod, setsigninMethod, mailChanger,
       setmailChanger,
      emailVerification,
      newData,
      setNewData,
      onboardingdata,
      setOnboardingdata
    }}>
      {children}
    </AuthContext.Provider>
  );

}

export const UserAuth = () => {
    return useContext(AuthContext);
  };

