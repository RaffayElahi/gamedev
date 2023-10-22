import { useStepperContext } from "../../contexts/StepperContext";
import { UserAuth } from "../../../../../../context/AuthContext";


export default function GeneralInfo() {
  const { userData, setUserData } = useStepperContext();
  const {onboardingdata, setOnboardingdata} = UserAuth()

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setUserData({ ...userData, [name]: value });
    // console.log(userData)
  
    setOnboardingdata({...onboardingdata, [name]: value})
    console.log(onboardingdata)

  };

  

  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Username
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={onboardingdata["username"] || ""}
            name="username"
            placeholder="Username"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          City
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={onboardingdata["city"] || ""}
            name="city"
            placeholder="City"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Date of Birth
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={onboardingdata["Date of birth"] || ""}
            name="Date of birth"
            placeholder="Dath of birth"
            type="date"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

      </div>
    </div>
  );
}