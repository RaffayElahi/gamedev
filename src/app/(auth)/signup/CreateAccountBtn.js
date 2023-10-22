'use client'

import Link from "next/link"
import { UserAuth } from "../../../context/AuthContext" 
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function CreateAccountBtn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    
    const {user, googleSignIn, logOut, signinApi} = UserAuth()
    
    const toastId = 'signin-page'

    const signinHandler = async () =>{
      
      try{
        let res = await signinApi(email, password)
        toast.success('Account created', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2500,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          toastId, transition:Slide
        })
        router.push('/signup/onboarding')      
      }
      catch(err){
        console.log(err.code)
        toast.error(err.code,{
          position: toast.POSITION.TOP_RIGHT, toastId
        })
        console.log(email, password)
      }
    }
    
    

    const googlehandleSignIn = async () =>{
      try{
        await googleSignIn()
        toast.success('Account created', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2500,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          toastId, transition:Slide
        })
        router.push('/signup/onboarding')  
      }
      catch(error){
        console.log(error)
      }
    };
    return (
        <main className="w-full h-[95vh] flex justify-center items-center overflow-x-hidden">
          <ToastContainer limit={3}/>
          <div className='card w-2/5  h-3/5 flex flex-col f p-12 border-4 rounded-3xl border-[#e4ebe4] bg-white '>
            <h2 className="font-serif text-4xl font-medium text-center ">Sign up into GameDev</h2>
            <div className='button flex flex-col w-full justify-center items-center space-y-3 h-1/6 mt-5 '>
         <button className="w-[97%] h-10 bg-slate-100 border-[1.75px] border-black rounded-3xl hover:bg-slate-50 font-semibold" onClick={googlehandleSignIn}>Sign up using Google</button>
          </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-[95%] h-px my-8 bg-[#d5e0d5] border-t-2"/>
          <span className="absolute px-3 -translate-x-1/2 bg-white left-1/2 text-[#d5e0d5] font-semibold text-lg">or</span>
       </div>
        <p className="text-gray-500 dark:text-gray-400"/>
      
        <div>
          <div className="flex justify-between h-[5vh] items-baseline ">
          < div>
            <input type="text" placeholder="First Name" className="border-2 h-[3vh] border-[#e4ebe4] w-[16vw] p-5 rounded-2xl font-normal text-base"/>
          </div>
          <div>
          <input type="text" placeholder="Last Name" className="border-2 h-[3vh] border-[#e4ebe4] w-[16vw] p-5 rounded-2xl font-normal text-base"/>
          </div>
        </div>
        <div className="h-[5vh]">
          <input type="text" placeholder="Email address" onChange={(e)=> setEmail(e.target.value)} className="w-full border-2 h-[4vh] border-[#e4ebe4] rounded-2xl font-normal text-base p-3 pl-5"/>
        </div>
        <div className="h-[5vh]">
          <input type="text" placeholder="Password (8 or more characters)" onChange={(e)=> setPassword(e.target.value)} className="w-full border-2 h-[4vh] border-[#e4ebe4]  rounded-2xl font-normal text-base p-3 pl-5"/>
        </div>
        <button className="w-full h-[3.25vh] rounded-3xl bg-red-700 hover:bg-red-800 text-white font-medium text-base mt-8" onClick={signinHandler} >Create my account</button>
    </div>
      <div className="mt-8">
        <p className="text-center text-slate-500 text-lg">Already have an account?<span className="text-red-700 font-bold hover:underline"><Link href="/login">Log in</Link></span></p>
        
      </div>
    </div>   
  </main>   
    )        
}            
            
    

