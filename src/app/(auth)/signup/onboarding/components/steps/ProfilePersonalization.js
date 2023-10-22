import { useStepperContext } from "../../contexts/StepperContext";
import { useState } from "react";
import { storage } from '../../../../../../firebase/config'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { UserAuth } from "../../../../../../context/AuthContext";


export default function ProfilePersonalization() {
  const { userData, setUserData } = useStepperContext();
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [progress, setProgress] = useState(false)
  const {onboardingdata, setOnboardingdata, user} = UserAuth()


  const handleSubmit = (e) => {
    setProgress(true)
    e.preventDefault()
    
    const file = e.target[0]?.files[0]

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(true)
        setProgresspercent(progress);
        if (progress === 100){
          setProgress(false)
          
        }else{console.log(progress)}
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
          setOnboardingdata({...onboardingdata, ['photoURL']: downloadURL})
          
        });
      }
    );
    console.log(progresspercent)
    console.log(imgUrl)
    setProgress(false)
    console.log(onboardingdata)
    
  }
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // setUserData({ ...userData, [name]: value });
    // console.log(userData)
    setOnboardingdata({...onboardingdata, ['email']: user.email})
    setOnboardingdata({...onboardingdata, [name]: value})
    console.log(onboardingdata)
    // setOnboardingdata({...onboardingdata, ['email']: user.email})
    
  };

  return (
    <>
    <div className="">Your profile picture</div>
    <div className="flex flex-row-reverse justify-end float-left space-x-9 w-full">
      
      <form onSubmit={handleSubmit} className="ml-10">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
        <button  type='submit'>Upload</button>
      </form>
      { progress? <div className='outerbar'><div className={` width[${progresspercent}px] bg-black `}>{progresspercent}%</div></div> : ""
      }
      {
        imgUrl? <div className="w-24 h-24  border-2 border-black  rounded-full  "><img src={imgUrl} alt='uploaded file' height={200}  className="object-cover rounded-full h-full w-full"/></div> : <div className="w-24 h-24 border-2 border-black  rounded-full overflow-hidden "><img src="/profiler_removebg.png" className="object-cover rounded-full h-full w-full"/></div> 
      }
      
    </div>
    
    <div className="w-full mx-2 flex flex-col">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          What best describes you?
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded  ">
    
          <input
            onChange={handleChange} 
            value={onboardingdata["bio"] || ""}
            name="bio"
            placeholder="Bio"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
    </div>
    </>
  );
}