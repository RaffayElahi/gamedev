function HeroSection() {
  return (
    <section className='flex bg-image-home-main-hero w-full h-[85vh] bg-cover bg-no-repeat items-center justify-center
    '>
        <div className="w-[61%] h-2/5">
            <h1 className="uppercase text-pink-600 font-bold text-2xl">game studios</h1>
            
            <h1 className="uppercase text-white font-bold text-6xl mt-3 mb-2 w-3/5">engaging through play</h1>
            
            <p className="text-white text-lg">Our games entertain millions of people every day, everywhere</p>
            <button className="text-white  w-48 h-14 rounded-[2.5rem] bg-black mt-6 text-xl uppercase pt-1 shadow-[0px_0px_80px_0px_#8c2f8e]
             hover:shadow-[10px_5px_100px_20px_#8c2f8e] bg-gradient-to-r from-[#e28971] to-[#e83f96]">Play Now</button>
        </div>
        
    </section>
  )
}

export default HeroSection
