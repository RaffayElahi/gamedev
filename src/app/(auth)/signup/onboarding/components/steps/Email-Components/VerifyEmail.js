import React, { useEffect } from 'react'
import { UserAuth } from '../../../../../../../context/AuthContext'
import { useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default function VerifyEmail() {
  const [status, setStatus] = useState('Not Verified')
  const [sendReq, setSendReq] = useState(false)
  const {user} = UserAuth()
  
  
  
  
  const statusChecker = () =>{
    setSendReq(true)
    }

  
  
  return (
    <div>
      <h1>Email has been sent. Click the link in the email to verify your email.</h1>
      <p>Click the below button after clicking the link in mail to change the status of verification of your email.</p>
      <button onClick={statusChecker}> Check Status </button>
      <p>Current Status: {status}</p>
    </div>
  )
}
