import React from 'react'
import Link from 'next/link'
import { getAuth, signOut } from "firebase/auth"


function LogIned() {
    const auth = getAuth()
    const signoutt = () =>{
        signOut(auth).then(() => {
            console.log("User logged out")
            window.location.reload(true)
        }).catch((error) => {
            console.log(error.code)
        });}
  return (

    <div className='skew-x-[30deg] dropdown'> 
        <button className='bg-black text-white h-full w-10 '>Name</button>
        <div className='dropdown-content absolute w-16 bg-white '>
            <Link href='/profile'>Profile</Link>
            <button onClick={signoutt}>Sign Out</button>
        </div>
    </div>
    
    

    
  )
}

export default LogIned
