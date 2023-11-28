import React,{useEffect, useState} from 'react'
import AboutDep from '../../components/AboutDep';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import ctaImage from "../../assets/images/macbook-macsection.png"
import ProjectsCarousel from '../../components/projects/ProjectsCarousel';
import c1 from "../../assets/images/macbook-sliderfoto/macbook-slider1.png"
import c2 from "../../assets/images/macbook-sliderfoto/macbook-slider2.png"
import c3 from "../../assets/images/macbook-sliderfoto/macbook-slider3.png"
import c4 from "../../assets/images/macbook-sliderfoto/macbook-slider4.png"
import c5 from "../../assets/images/macbook-sliderfoto/macbook-slider5.png"
import c6 from "../../assets/images/macbook-sliderfoto/macbook-slider6.png"

function miningDep() {


  const projectInfo=[
    {
      title:"Projekti 7",
      image: c1,
    },
    {
      title:"Projekti 8",
      image: c2,
    },
    {
      title:"Projekti 9",
      image: c3,
    },
    {
      title:"Projekti 10",
      image: c4,
    },
    {
      title:"Projekti 11",
      image: c5,
    },
    {
      title:"Projekti 11",
      image: c6,
    },
  ]

  const [myData,setMyData] = useState([]);

  useEffect(()=>{
    if(window.location.href.includes('Dep'))
    setMyData({
      "Name":'mac',
      "Image":ctaImage,
      "Text":'minDescLg',
      "Textsize":"text-[44px]",
      "TextsizeSmall":"sm:text-[64px]",
      "Textcolor":"text-gray",
      "Bordercolor":"before:border-gray",
      "TextHeight":"70px",
      "TextWidth":"450",
    })    
  },[])
  
  return (
    <>
      <Navbar  NavbarColor="bg-gray" TextColor="text-gray" AfterColor="after:bg-gray" TextHoverColor="hover:text-gray"/>
      <AboutDep myData={myData}/>
      <ProjectsCarousel cardInfo={projectInfo}/>
      <CTA bgColor="thormining" bgImage={ctaImage}/>

    </>
  )
}

export default miningDep