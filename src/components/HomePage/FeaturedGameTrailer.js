import Link from 'next/link'
import React from 'react'

function FeaturedGameTrailer() {
  const src = 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
  return (
    <section className='h-[50vh] w-full bg-[rgb(42,25,95)]'>
        <div className='w-full h-[5vh] pt-20 text-center'>
            <h1 className='text-center text-white text-6xl ml-4'>Game Trailer</h1>
        </div>
        <div className='w-full h-full flex justify-center mt-28 rounded-xl'>
            <video controls width="60%" className='rounded-[3.5rem]'>
                <source src={src} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video>
        
        </div>
        <div className='bg-gradient-to-b from-[#cd15f7] to-[#6c16b2] relative  w-[15%] h-[22vh] rounded-2xl p-6 flex flex-col float-right -top-[35vh] right-[3vh]'>
            <h1 className='capitalize text-white text-[2rem] mt-5 text-center'>the crazy farm game</h1>
            <Link href='/' className='underline text-white text-xl mt-4 text-center'>View Details</Link>
        </div>
    </section>
  )
}

export default FeaturedGameTrailer
