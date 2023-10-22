import { doc, setDoc } from "firebase/firestore";
import {} from "firebase/firestore"
import { UserAuth } from "../../../../../context/AuthContext";
import { database } from "../../../../../firebase/config";
export default function StepperControl({ handleClick, currentStep, steps }) {
  const {user, onboardingdata} = UserAuth()
 
  const nexthandler = async () =>{
    if (currentStep===3){
      try{
        const docRef = await setDoc(doc(database, "users", user.uid), onboardingdata)
        console.log("doc added")
      }catch(err){
        console.log(err)
      }
      console.log('Im back')
      
    }
    handleClick('next')
  }

    return (
      <div className="container mt-4 mb-8 flex justify-around ">
        <button
          onClick={() => handleClick()}
          className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
            currentStep === 1 ? " hidden" : "block" } ${((currentStep === 2)&&(user.emailVerified===false)) ? "hidden" : "block"}` }
        >
          Back
        </button>
  
        <button
          onClick={nexthandler}
          className={`cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white ${((currentStep === 2)&&(user.emailVerified===false)) ? "hidden" : "block"}` }
          
        >
          {currentStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>
      </div>
    );
  }
  