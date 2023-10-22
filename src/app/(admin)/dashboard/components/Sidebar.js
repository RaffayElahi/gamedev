import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
function Sidebar() {
  return (
    <div className='w-[18vw] h-full border-r-[1px] border-r-slate-200 min-h-screen'>
      <h1 className='text-3xl m-5 text-[#6439ff] text-center font-semibold uppercase'>GameDevmin</h1>
      <hr className=''/>
      <ul className='p-4'>
        <p className='uppercase text-sm mb-4 text-slate-500 mt-4  '>Essentials</p>
        <li className='flex items-center pointer hover:bg-purple-200 h-8'>
            <GamesOutlinedIcon className='text-[#7451f8]'/>
            <span className='text-lg ml-1'>Games</span>
        </li>
        <li className='flex items-center pointer hover:bg-purple-200 h-8'>
            <BookOutlinedIcon className='text-[#7451f8]'/>
            <span className='text-lg ml-1'>Blog</span>
        </li>
        <p className='uppercase text-sm mb-4 text-slate-500 mt-4  '>Community</p>
        <li className='flex items-center pointer hover:bg-purple-200 h-8'>
            <PeopleOutlinedIcon className='text-[#7451f8]'/>
            <span className='text-lg ml-1'>Community</span>
        </li>
        <p className='uppercase text-sm mb-4 text-slate-500 mt-4  '>Game items</p>
        <li className='flex items-center pointer hover:bg-purple-200 h-8'> 
            <Inventory2OutlinedIcon className='text-[#7451f8]'/>
            <span className='text-lg ml-1'>Products</span>
        </li>
        <li className='flex items-center pointer hover:bg-purple-200 h-8'>
            <AttachMoneyOutlinedIcon className='text-[#7451f8]'/>
            <span className='text-lg ml-1'>Transctions</span>
        </li>
        <p className='uppercase text-sm mb-4 text-slate-500 mt-4  '>User</p>
        <li className='flex items-center pointer hover:bg-purple-200 h-8'>
            <Person3OutlinedIcon className='text-[#7451f8]'/>
            <span className='text-lg ml-1'>Profile</span>
        </li>
        <li className='flex items-center pointer hover:bg-purple-200 h-8'>
            <LogoutOutlinedIcon className='text-[#7451f8]'/>
            <span className='text-lg ml-1'>Logout</span>
        </li>
      </ul>
      <div>Color Options</div>
    </div>
  )
}

export default Sidebar
