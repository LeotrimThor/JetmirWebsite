import React,{useState,useEffect} from 'react'
import AboutDep from '../../components/AboutDep';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import ProjectsCarousel from '../../components/projects/ProjectsCarousel';
import ConstructionIMG from "../../assets/images/ipad-ipadsection.png"

import s1 from '../../assets/images/ipad-sliderfoto/ipad-slider1.png'
import s2 from '../../assets/images/ipad-sliderfoto/ipad-slider2.png'
import s3 from '../../assets/images/ipad-sliderfoto/ipad-slider3.png'
import s4 from '../../assets/images/ipad-sliderfoto/ipad-slider4.png'
import s5 from '../../assets/images/ipad-sliderfoto/ipad-slider5.png'
import s6 from '../../assets/images/ipad-sliderfoto/ipad-slider6.png'

function ConstructionDep() {

  const projectInfo=[
    {
      title:"Projekti 1",
      image: s1,
    },
    {
      title:"Projekti 2",
      image: s2,
    },
    {
      title:"Projekti 3",
      image: s3,
    },
    {
      title:"Projekti 4",
      image: s4,
    },
    {
      title:"Projekti 5",
      image: s5,
    },
    {
      title:"Projekti 6",
      image:s6,
    },
    
  ]

  const [myData,setMyData] = useState(()=>[]);
  useEffect(()=>{
    if(window.location.href.includes('Dep'))
    setMyData({
      "Name":'ipad',
      "Image":ConstructionIMG,
      "Text":'cnstDescLg',
      "Textsize":"text-[44px]",
      "TextsizeSmall":"sm:text-[64px]",
      "Textcolor":"text-gray",
      "Bordercolor":"before:border-gray",
      "TextHeight":"100px",
      "TextWidth":"450px",
      
    })
  },[])
  return (
    <>
    <Navbar NavbarColor="bg-gray" TextColor="text-gray" AfterColor="after:bg-gray" TextHoverColor="hover:text-gray" />
    <AboutDep myData={myData}/>
    <ProjectsCarousel cardInfo={projectInfo}/>
    <CTA bgColor="thorconstruction" bgImage={ConstructionIMG}/>
    </>
  )
}

export default ConstructionDep