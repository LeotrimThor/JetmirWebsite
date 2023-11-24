import React,{useEffect, useState} from 'react'
import AboutDep from './AboutDep';



function DepReusable() {

    const [myData,setMyData] = useState([]);
    var linq = window.location.href;
    useEffect(()=>{
        if(window.location.href.includes('Dep'))
        setMyData({"Name":"Mining","Text":"MiningText","Image":"../assets/images/apple-home-bg-2.png"})
        else if(window.location.href.includes('Mining'))
        setMyData({"Name":"Construction","Text":"ConstructionText","Image":"../assets/images/apple-home-bg-2.png"})

    },[linq])

  return (
    <>
    
    <AboutDep myData={myData}/>
    
    </>
    )
}
export default DepReusable;