
import { database } from "../../../firebase/config";
import { collection, doc, getDoc } from "firebase/firestore"
// import { useEffect, useState } from "react";
import Dashboard from "././Dashboard"
import { UserAuth } from "../../../context/AuthContext";

export default function page(){
    // const {user} = UserAuth()
    // const [loading, setLoading] = useState(true)
    // useEffect(()=>{
    //     const getUsers = async () => {
    //         const docRef = doc(database, 'admin', user.uid);
    //         const docSnap = await getDoc(docRef)
            
    //         if (docSnap.exists()){
    //             return true
    //         }else{
    //             setLoading()
    //             return false
    //         }
    //     }
    //     const ans = getUsers()
    //     ans? <LOGIN/>:''
    // }, [])
    return(
        <Dashboard />
    )
    
}
