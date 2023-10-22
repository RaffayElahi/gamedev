import React from 'react'

function TrackRecord() {
  return (
    <section className='h-[45vh] bg-[#211671] w-full flex flex-col -mt-2'>
        <div className='w-full h-[5vh] mt-20 text-center'>
            <h1 className='text-center text-white text-6xl ml-4'>Track Record</h1>
        </div>
        <div className='w-full h-[13vh] flex justify-center space-x-12 mt-10 '>
            <div className='w-[20%] h-full bg-[#372f7f] rounded-2xl flex flex-col justify-center items-center'>
                <b className='text-white text-6xl '>+12,000</b>
                <p className='text-[#06e6f0] text-xl text-center uppercase font-semibold'>games</p>
            </div>
            <div className='w-[20%] h-full bg-[#372f7f] rounded-2xl flex flex-col justify-center items-center'>
                <b className='text-white text-6xl '>+398943</b>
                <p className='text-[#06e6f0] text-xl text-center uppercase font-semibold'>players</p>
            </div>
            <div className='w-[20%] h-full bg-[#372f7f] rounded-2xl flex flex-col justify-center items-center'>
                <b className='text-white text-6xl '>+104</b>
                <p className='text-[#06e6f0] text-xl text-center uppercase font-semibold'>champions</p>
            </div>
        </div>
    </section>
  )
}

export default TrackRecord
