'use client'
import GameRepresenter from "../GameRepresenter"
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase/config";
import { useState, useEffect, useMemo } from 'react';
import { getGamesGen } from "../../firebase/Services";
import Link from 'next/link';

function GamesSection(){
    const [rows, setrows] = useState([])    
  useMemo(()=>{
    getGamesGen(setrows)
  }, [])
  
    return(


        <section className="h-fit bg-cover bg-no-repeat bg-top -mt-4 bg-image-home-image-second-section w-full  pt-[13vh] flex flex-col items-center ">
            <div className="">
                <h2 className="text-center text-white text-6xl">Top Games</h2>
            </div>
            <div className='columnWraper mt-24 mb-20'>
                {rows.map((status)=>{
                    return(
                        <>
                            <Link href={`/games/${status.gameName.replace(/\s/g, '')}`}>
                                <GameRepresenter gameName={status.gameName} mainBg={status.mainBg} gameIcon={status.gameIcon} text={status.text}/>
                            </Link>
                        </>
                    )
                })}
            </div>
        </section>
    )
}

export default GamesSection