import Image from "next/image"

function QualityEntertainment() {
  return (
    <section className="h-[95vh] w-full bg-[#000132] pt-[35vh] pl-[15%] " style={{backgroundImage: "url('/UI design/1-page/object.png')", backgroundRepeat: "no-repeat"}}>
      <div className="flex justify-around items-center">
        <div className="w-[61%] h-2/5  ">
          <h2 className="text-white capitalize text-6xl mb-4 ">we focus on quality entertainment</h2>
          <p className="text-white">Our main focus is to provide the best entertainment possible to our players. We place key emphasis on making games that are of a high quality in every way possible. This means that we ensure that all of out games themes are engaging, our features are unique and captivating and our art, stunning and precise! We don't cut corners and do whatever is necessary to provide a memorable gaming experience.</p>
          <button className="text-white  w-48 h-14 rounded-[2.5rem] bg-black mt-6 text-xl uppercase pt-1 shadow-[0px_0px_80px_0px_#8c2f8e]
             hover:shadow-[10px_5px_100px_20px_#8c2f8e] bg-gradient-to-r from-[#e28971] to-[#e83f96]">Learn More</button>
        </div>

        <div className="text-white w-[40%] h-[60%] flex items-end justify-center">
          <Image src='/UI design/1-page/Plyers.png' width={320} height={320} priority/>
        </div>
      </div>
    </section>
  )
}

export default QualityEntertainment

