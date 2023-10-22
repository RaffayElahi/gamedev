

import ContentOnboarding from "./ContentOnboarding"
import { Suspense } from "react"
import MiniLoader from "./MiniLoader"

export const metadata = {
    title: "Onboarding - GameDev"
}

export default function page(){
    // const [loading, setLoading] = useState(true)
    // useEffect(() =>{
    //     const method = localStorage.getItem("methodd")
    //     console.log(method)
    //     setLoading(false)
    //   }, [])

    return(
        <>
            <ContentOnboarding/>
            
        </> 
    )
}

