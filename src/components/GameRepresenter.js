import Image from 'next/image'
//Props include: mainBg{url}, gameIcon{url}, gameName{string}, text{string of 6 words}
export default function GameRepresenter(props) {
  
//   suppose there is an absolute url in a constant named as imageURL
// We will used inline-css to show the background image into a div e.g. style={{backgroundImage: `url(${imageUrl})`}}
console.log(props)
return (
    <div className="w-[25vw] h-[37vh] flex flex-col items-center ">
        <div className="w-full  h-[30vh] bg-slate-200 border-[6px] border-[#630fdf] rounded-lg bg-cover bg-no-repeat" style={{backgroundImage: `url(${props.mainBg})`}}></div>
        <div className="h-2/5 w-[89%] relative bottom-16 z-10 bg-[#5767d6] rounded-lg flex ">
            <div className='w-[27%] h-full ml-3 flex flex-col justify-center'> 
                <div className='bg-[#c6c1dd] h-[81px] w-[81px] rounded-2xl shadow-black bg-cover bg-no-repeat' style={{backgroundImage: `url(${props.gameIcon})`}}></div>
            </div>
            <div className='w-[40%] h-full flex flex-col justify-center'>
                <h2 className='text-white text-xl uppercase font-semibold mb-3'>{props.gameName}</h2>
                <p className='text-white text-sm font-light'>{props.text}... <span className='text-[#cf913b] font-normal'>Read More</span></p>
            </div>
            <div className='flex flex-col justify-center w-[33%] h-full items-center'>
                <p className='text-xs text-white -mb-5 ml-1 font-light'>Download now at</p>
                <Image src='/UI design/1-page/google-play-download.png' width={100} height={100} alt='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg' priority/>
                <Image src='/UI design/1-page/apple-download.png' width={100} height={100} alt='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg' style={{
                    marginTop: '-3vh'
                }} priority/>
                <div></div>
            </div>

        </div>
    </div>
  )
}
