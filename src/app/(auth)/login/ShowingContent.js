'use client'
import { useRouter } from 'next/navigation'
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from "react";
import LoginContent from "./LoginContent";
import { onAuthStateChanged } from "firebase/auth";
import { database } from '../../../firebase/config';
import Loader from "./Loader";
import { redirect } from 'next/navigation'
import {auth} from "../../../firebase/config"
// export const metadata = {
//     title: "Login - GameDev"
// }

const adminCheck = async (user) =>{
  const admin = await getDoc(doc(database, `admins/${user.uid}`)) 
  return admin.exists()
}


export default function ShowingContent(){
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
          
          if (res?.accessToken) {
            router.push('/')
            
          } else {
            setLoading(false);
          }
        });
      }, []);
    return loading ? <Loader /> : <LoginContent/>
      ;
}