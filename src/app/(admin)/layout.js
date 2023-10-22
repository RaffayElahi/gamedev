import Sidebar from "./dashboard/components/Sidebar";
import Navbar from "./dashboard/components/Navbar";

export default function layout({children}){
    return(
        <div className="flex">
            <Sidebar/>
            <div className='flex-grow'>
                <Navbar/>
                {children}
            </div>
        </div>
    )
}