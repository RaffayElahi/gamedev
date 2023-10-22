'use client'

import { useState } from "react";
import { storage } from "../../../../firebase/config";
import { collection, doc, setDoc} from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { database } from "../../../../firebase/config";
export default function page() {
    const [file, setFile] = useState("");
    const [iconUrl, seticonUrl] = useState(null)
    const [bgImg, setbgImg] = useState(null)
    const [data, setdata] = useState({})

    const handleChangeInput = (e)=>{
        const { name, value } = e.target

        setdata({...data, [name]: value})
        console.log(data)
    }
    
    const addDoc = async (e) => {
        
        console.log(data)
        
        
        await setDoc(doc(database, "gamesgen", data["gameName"]), data)
        toast.success("The description for general game added", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            transition:Slide
          })
    }
    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
 
    const handleUpload = (seturl, name, keyname) => {
        // if (!file) {
        //     alert("Please upload an image first!");
        // }
  
        const storageRef = ref(storage, `/files/${file.name}`);
 
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
 
                // update progress
                
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    setdata({...data, [keyname]: url})
    
                    console.log(file)
                    seturl(url)
                    toast.success(name, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2500,
                        hideProgressBar:false,
                        closeOnClick:true,
                        pauseOnHover:true,
                        draggable:true,
                        transition:Slide
                      })
                });
            }
        );
    };
  return (

    <div>
        <ToastContainer/>
        <div className="top uppercase text-4xl ml-5 mt-5 font-semibold p-1 m-5" style={{WebkitBoxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.5)", boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.5)'}}>Add new games (General)</div>
        <div className="bottom p-1 m-5 flex flex-col" style={{WebkitBoxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.5)", boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.5)'}}>
            <div className="flex flex-col">
                <div>
                    <h1>Add Game Icon</h1>
                </div>
                <div>
                <div className="flex">
                    <div style={{flex: '1'}}>
                        <img
                        src={(iconUrl)? iconUrl : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                        alt=""
                        className="w-1/2 "
                        />
            
                    </div>
                    <div style={{flex: '2'}}>
                        <label className="block mb-2 text-sm font-medium text-gray-900 h-1/3 dark:text-white" htmlFor="file_input">Upload file</label>    
                        <input onChange={handleChange} className="block w-full text-sm text-gray-900 border h-1/3 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
                        <button onClick={()=> {handleUpload(seticonUrl, 'Icon Image Uploaded', 'gameIcon')}} className="bg-black text-white font-normal rounded-lg p-4 w-60 ">Upload</button>
                        
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div>
                    <h1>Add Game Background for card</h1>
                </div>
                <div className="flex">
                    <div style={{flex: '1'}}>
                        <img
                        src={(bgImg)? bgImg : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                        alt=""
                        className="w-1/2 "
                        />
            
                    </div>
                    <div style={{flex: '2'}}>
                        <label className="block mb-2 text-sm font-medium text-gray-900 h-1/3 dark:text-white" htmlFor="file_input">Upload file</label>
                        <input onChange={handleChange} className="block w-full text-sm text-gray-900 border h-1/3 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
                        <button onClick={()=>{handleUpload(setbgImg, 'Game Background uploaded', 'mainBg')}} className="bg-black text-white font-normal rounded-lg p-4 w-60 ">Upload</button>
                        
                    </div>
                </div>    
            </div>
            <div className="flex">

                <div className="w-1/2">
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 ">Enter Game Name</label>
                    <input type="text" id="small" placeholder="Game Name(e.g. Clan Wars)" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="gameName"
                    value={data["gameName"] || ""}
                    onChange={handleChangeInput}
                    />
                </div>
                <div className="w-1/2">
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 ">Enter Introduction to game (6 Words Max)</label>
                    <input type="text" id="small-input" placeholder="Introduction(e.g. This game is multi player, stratergy)" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="text"
                    value={data["text"] || ""}
                    onChange={handleChangeInput}
                    />
                </div>
            </div>
            <div className="w-full flex ">
                <button onClick={addDoc} className="ml-auto mr-auto mt-10  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-64 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Submit Data</button>
            </div>
        </div>
        </div>
    </div>
  )
}