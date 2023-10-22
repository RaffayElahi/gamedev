import React from 'react'
import Link from 'next/link'

export default function NotSigninComponent() {
  return (
    <div className='skew-x-[30deg] flex w-52 space-x-5 mr-5'>
      <div className='w-20 bg-white text-center p-1 rounded-2xl text-purple-900 border-1 border-transparent shadow-2xl text-lg'><Link href='/signup'>Sign up</Link></div>
      <div className='w-[4rem] bg-white text-center p-1 rounded-2xl text-purple-900 border-1 border-transparent shadow-2xl text-lg'><Link href='/login'>Log in</Link></div>
    </div>
  )
}

