import React from "react"
import Headers from '../components/Headers'
import { collection, query, where } from "firebase/firestore";
import { database } from "../firebase/config";
import HeroSection from '../components/HomePage/HeroSection'
import GamesSection from "../components/HomePage/GamesSection";
import FeaturedGameTrailer from "../components/HomePage/FeaturedGameTrailer";
import QualityEntertainment from "../components/HomePage/QualityEntertainment";
import TrackRecord from "../components/HomePage/TrackRecord";
import GamePosts from "../components/HomePage/GamePosts";

const detailer = async () => {
  const citiesRef = collection(database, "users");
  const q = await query(citiesRef, where("username", "==", true)).get()
}
  

export default function page() {
  
  return (
    <>
      <Headers/>
      <HeroSection/>
      <GamesSection/>
      <FeaturedGameTrailer/>
      <QualityEntertainment/>
      <TrackRecord/>
      <GamePosts/>
    </>
  )
}
