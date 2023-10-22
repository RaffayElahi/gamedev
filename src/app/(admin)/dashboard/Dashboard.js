'use client'
import BasicTable from './components/BasicTable'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useRouter } from 'next/navigation';

function Dashboard() {
  const router = useRouter()
  return (
    <>  
      <div className='w-full h-16 flex justify-between items-center'>
        <h1 className='uppercase text-3xl font-semibold text-[#5a4be7] ml-5'>Games General Information List</h1>
        <button className='uppercase h-1/2 bg-[#5a4be7] mr-5 w-36 flex justify-evenly text-white font-semibold items-center rounded-2xl hover:bg-purple-400 hover:text-black ' onClick={()=> router.push('/dashboard/addgame-gen')}>
          <AddCircleOutlineOutlinedIcon/>
          Add games
        </button>
      </div>
      <hr/>  
      <BasicTable/>
    </>
  )
}
export default Dashboard