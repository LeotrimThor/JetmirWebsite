import React,{useState,useEffect} from 'react'
import AboutDep from '../../components/AboutDep';

import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import EnergyIMG from "../../assets/images/iphone-iphonesection.png"
import ProjectsCarousel from '../../components/projects/ProjectsCarousel';

import s1 from '../../assets/images/iphone-sliderfoto/iphone-slider1.png'
import s2 from '../../assets/images/iphone-sliderfoto/iphone-slider2.png'
import s3 from '../../assets/images/iphone-sliderfoto/iphone-slider3.png'
import s4 from '../../assets/images/iphone-sliderfoto/iphone-slider4.png'
import s5 from '../../assets/images/iphone-sliderfoto/iphone-slider5.png'
import s6 from '../../assets/images/iphone-sliderfoto/iphone-slider6.png'

function Iphone() {


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
      image: s6,
    },
  ]

 
    const [myData,setMyData] = useState([]);

    useEffect(()=>{
      if(window.location.href.includes('Iphone'))
      setMyData({
        "Name":'iphone',
        "Image":EnergyIMG,
        "Text":'rnwDescLg',
        "Textsize":"text-[34px]",
        "TextsizeSmall":"sm:text-[64px]",
        "Bordercolor":"before:border-gray",
        "Textcolor":"text-gray",
        "TextHeight":"70px",
        "TextWidth":"20px",
    })
    },[])
    return (
      <>
      <Navbar NavbarColor="bg-gray" TextColor="text-gray" AfterColor="after:bg-gray" TextHoverColor="hover:text-gray"/>
      <AboutDep myData={myData}/>
      <ProjectsCarousel cardInfo={projectInfo}/>
      <CTA bgColor="thorenergy" bgImage={EnergyIMG}/>
      </>
    )
}

export default Iphone;