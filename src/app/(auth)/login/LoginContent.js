'use client'
import Link from "next/link"
import { UserAuth } from "../../../context/AuthContext"
import { useState } from "react"




export default function LoginContent(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {googleSignIn, loginApi} = UserAuth()
  const googlehandleSignIn = async () =>{
    try{
      await googleSignIn()

    }
    catch(error){
      console.log(error)
    }
  };
  const loginHandler = async ()=>{
    try{
      let res = await loginApi(email, password)
      console.log(res)}
    catch(err){
      console.log(err.code)
    }
  }
    return (
      <main className="w-full h-[95vh] flex justify-center items-center overflow-x-hidden  ">

        <div className='card w-2/5 h-3/5 flex flex-col p-12 border-4 rounded-3xl border-[#e4ebe4] bg-white '>
          <h2 className="font-serif text-4xl font-medium text-center ">Log in to GameDev</h2>
          <div>
            <div>
                <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} className="border-2 h-[3vh] border-[#e4ebe4] w-[32vw] p-5 rounded-2xl font-normal text-base"/>
                
            </div>
            <div>
                <input type="text" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} className="border-2 h-[3vh] border-[#e4ebe4] w-[32vw] p-5 rounded-2xl font-normal text-base mt-5"/>
            </div>
            <button className="w-full h-[4vh] bg-slate-800 mt-5 text-white text-xl rounded-2xl font-semibold" onClick={loginHandler}>Log in into the GameDev</button>
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-[95%] h-px my-8 bg-[#d5e0d5] border-t-2"/>
            <span className="absolute px-3 -translate-x-1/2 bg-white left-1/2  font-base text-[#e4ebe4] text-xl ">or</span>
          </div>
          <div className='button flex flex-col w-full justify-center items-center space-y-3 h-1/6 mt-5'>
            <button className="w-[97%] h-10 bg-slate-100 border-[1.75px] border-black rounded-3xl hover:bg-slate-50 font-semibold" onClick={googlehandleSignIn}>Sign up using Google</button>
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-[95%] h-px my-8 bg-[#d5e0d5] border-t-2"/>
            <span className="absolute px-3 -translate-x-1/2 bg-white left-1/2  font-base text-[#e4ebe4] text-xl">Don't have an account?</span>
          </div>
          <div className="w-full">
            <p className="bg-black text-white text-center"><Link href="/signup">Sign up</Link></p>
          </div>
        </div>
      </main>
    )
}
