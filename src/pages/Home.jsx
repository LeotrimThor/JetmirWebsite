import React from 'react'
import CTA from '../components/CTA';
import { Stats } from '../components/Stats';
import Navbar from "../components/Navbar";
import Services from "../components/Service";
import bgImage from '../assets/images/apple-home-bg-2.jpg';
import MainAboutUs from './MainAboutUs';
import Hero from '../components/Hero';


const Home = () => {
  return (
    <div >
      <Navbar NavbarColor="bg-thorwhite" TextColor="text-thorwhite" AfterColor="after:bg-thorwhite" TextHoverColor="hover:text-thorwhite" />
      <Hero />
      <MainAboutUs/>
      
      {/* <News/> */}
      <Stats/>
      <CTA bgImage={bgImage} bgColor="thorwhite"/>

    </div>
  )
}

export default Home