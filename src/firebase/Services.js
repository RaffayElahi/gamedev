import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onIdTokenChanged } from 'firebase/auth'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { database } from './config'


export const SendEmail = async () =>{
    const auth = getAuth()
    await sendEmailVerification(auth.currentUser)
    console.log('Email sent')
}

let dbRef = collection(database, "users")
let anotRef = collection(database, "gamesgen")

export const getGamesGen = (setter) =>{
    onSnapshot(anotRef, (response)=>{
        setter(
            response.docs.map((docs)=>{
                return {...docs.data(), id: docs.id};
            })
        )
    })
}