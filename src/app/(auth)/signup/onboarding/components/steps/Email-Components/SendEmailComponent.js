import React from 'react'
import { UserAuth } from '../../../../../../../context/AuthContext'
import { SendEmail } from '../../../../../../../firebase/Services'

export default function SendEmailComponent() {
  const {mailChanger, setmailChanger} = UserAuth()
  const {user} = UserAuth()

  const handleEmail = async () =>{
    

    try{await SendEmail()

        setmailChanger(true)  }
    catch(err){
        console.log(err)
    }
    
  }

  return (
    <div className='flex flex-col items-center'>
      <p>We need to verify your email {user.email}.</p>
      <p>Click Send email to send you a mail verfying a valid email.</p>
      <button onClick={handleEmail} className='bg-white text-gray-800 border-2 rounded-2xl w-[25%] h-10 mt-5 hover:bg-gray-800 hover:text-white'>Send Email</button>

    </div>
  )
}
