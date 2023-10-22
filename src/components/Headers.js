'use client';

import { usePathname } from 'next/navigation'
import React from 'react'
import  Link  from 'next/link'
import NotSigninComponent from './NotSigninComponent';
import LogIned from './LogIned';
import  { UserAuth }  from '../context/AuthContext';
import { getAuth } from "firebase/auth";




export default function Headers(){
    const auth = getAuth();
    const user = auth.currentUser
    const currentRoute = usePathname()
    const baseStyle = 'cursor-pointer'
    const nonActiveStyle = 'cursor-pointer hover:text-black'
    const activeStyle = 'cursor-pointer text-white bg-gradient-to-r from-purple-400 to-blue-900 p-2 rounded-lg skew-x-12'





    return(
        <header className='h-[8vh] flex items-center justify-evenly w-[55vw] bg-gradient-to-b from-[#c615f2] to-[#6017aa] left-[21%] -skew-x-[30deg] absolute z-10 top-6'>
            <div className='skew-x-[30deg] text-3xl font-semibold ml-8 text-white ' >GameDev</div>
            <div className='skew-x-[30deg] w-3/4 '>
                <ul className='gro flex uppercase text-lg text-gray-200 items-center justify-evenly ml-7'>
                    <li><Link href='/' className={currentRoute === '/' ? activeStyle : nonActiveStyle}>Home</Link></li>
                    <li><Link href='/games' className={currentRoute === '/games' ? activeStyle : nonActiveStyle}>Games</Link></li>
                    <li><Link href='/blog' className={currentRoute === '/blog' ? activeStyle : nonActiveStyle}>Blog</Link></li>
                    <li><Link href='/community' className={currentRoute === '/community' ? activeStyle : nonActiveStyle}>Community</Link></li>
                </ul>
            </div>
            {user? <LogIned/> :<NotSigninComponent/>}
            
            

        </header>
    )
}