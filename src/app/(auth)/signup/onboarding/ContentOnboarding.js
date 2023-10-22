'use client'
// import {useEffect, useState, useRef} from "react"
// import Image from 'next/image'
// import { UserAuth } from "../../../../context/AuthContext" 
// import MiniLoader from "./MiniLoader"
// import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onIdTokenChanged } from 'firebase/auth';



// export default function ContentOnboarding() {
//   const [load, stLoad] = useState(true)
//   const [date, setDate] = useState('')
//   const dateInputRef = useRef(null);
//   const {signinMethod} = UserAuth()

//   useEffect(()=>{
//     stLoad(false)
//   }, [])
  
//   const send = async () =>{
//     const auth = getAuth()
//     await sendEmailVerification(auth.currentUser)
//     console.log('Email sent')
//     onIdTokenChanged(async user=>{
//       if (user){
//         console.log(await user.getIdToken())
//       }
//     })
//   }

//   const controlDate = (e) =>{
//     const dateCurr = e.target.value
//     setDate(dateCurr)
//     console.log(date, e.target.value)
//   }


//   return (
//       <main className='card'>
//         <div className=''>
//           <h1 className=''>Welcome Name</h1>
//           <p className=''>Personalize your account data.</p>
//         </div>
//         <div className='Image-section flex '>
//           <div className='Photo'>
//             {load? <MiniLoader/>: (localStorage.getItem('methodd') ==='email')? <img src="/profiler_removebg.png" width={200} height={200} alt="General profile image"/>: <>Gmail</>}
            
//           </div>
//           <div className='Upload'>
//             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
//             <input className="block w-full text-sm text-gray-900 border border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
//             <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG(MAX. 800x400px).</p>
//             <button className="bg-black text-white">Upload file</button>
//           </div>
//         </div>

//         <div className='Username'>
//           <input type="text" placeholder="Username"/>
//         </div>
//         <div className='Date-of-birth'>
//           <label>Enter your date of birth:- 
//             <input type="date" onChange={controlDate} ref={dateInputRef}/>
//           </label>
          
//         </div>
        
//         <div className='email-verified'>
//           <button className="bg-black text-white">Send email</button>
//         </div>
//         <button className='bg-black text-white' onClick={send}>Continue</button>
//       </main>
//     )   
// }
import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import ProfilePersonalization from "./components/steps/ProfilePersonalization";
import Success from "./components/steps/Success";
import GeneralInfo from "./components/steps/GeneralInfo";
import EmailVerificationSection from "./components/steps/EmailVerificationSection";

export default function ContentOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "General Information",
    "Email Verification",
    "Profile Customization",
    "Profile Success",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <GeneralInfo/>;
      case 2:
        return <EmailVerificationSection />;
      case 3:
        return <ProfilePersonalization />;
      case 4:
        return <Success />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2 h-[75%]  ">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

