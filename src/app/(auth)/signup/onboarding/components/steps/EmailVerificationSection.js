import { useStepperContext } from "../../contexts/StepperContext";
import { UserAuth } from "../../../../../../context/AuthContext";
import { useEffect, useState } from "react";
import { SendEmail } from "../../../../../../firebase/Services";
import SendEmailComponent from "./Email-Components/SendEmailComponent";
import VerifyEmail from "./Email-Components/VerifyEmail";
import SuccessEmail from "./Email-Components/SuccessEmail";

export default function EmailVerificationSection() {
  const { userData, setUserData } = useStepperContext();
  const {user, mailChanger, setmailChanger} = UserAuth()
  const [stateNo, setStateNo] = useState(false) 
  console.log(user)
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData)
  };

  

  return (
    <div className="flex flex-col items-center ">
      <div className="w-[45%]">
        <img src="/emailIcon.svg"></img>
      </div>
      {((mailChanger)&& (user.emailVerified === false))? <VerifyEmail setState={setStateNo}/> : (user.emailVerified)? <SuccessEmail/> : <SendEmailComponent/> }

    </div>
)}
