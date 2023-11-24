import React from 'react'
import Logo from "./../assets/images/jetmir.png";
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import { faLinkedin,faFacebook,faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from "react-i18next";
import { ContainerAnimation, itemAnimation, textAnimation } from '../utils/motion';
import { motion } from "framer-motion";

export const Footer = () => {
  const { t } = useTranslation();

  const ourPagesLinks = [
    { name: t('home'), link: "/" },
    { name: t('about'), link: "/About" },
    { name: t('product'), link: "/Departments" },
    { name: t('CntUs'), link: "/Contact" },
  ];

  const socials=[
    {name:"Linkedin", icon:faLinkedin, link:"https://www.linkedin.com/company/thorindustries/", color:"hover:text-[#0072b1]"},
    {name:"Facebook", icon:faFacebook, link:"#", color:"hover:text-[#3b5998]"},
    {name:"Twitter", icon:faTwitter, link:"#", color:"hover:text-[#00acee]"},
    {name:"Instagram", icon:faInstagram, link:"#", color:"hover:text-[#962fbf]"},
  ]
  return (
    <>
<footer className="bg-[#191A19] w-full items-center bottom-0">
    <div className="grid grid-cols-1 md:grid-cols-5 py-10 mx-14 justify-items-center">

        <motion.div variants={ContainerAnimation} initial="hidden" whileInView="show" className='py-2 overflow-clip'>
            <Link to="/" className="flex items-center">
                <motion.img variants={textAnimation} src={Logo} className="h-32 align-middle " alt="Thor industries Logo" onClick={()=>window.scrollTo(0,0)}/>
            </Link>
        </motion.div>

        
        <motion.div variants={ContainerAnimation} initial="hidden" whileInView="show" className='py-2 overflow-clip'>
            <motion.h2 variants={textAnimation} className="text-lg font-medium text-thorwhite text-center">{t('ft1')}</motion.h2>
            <motion.ul variants={textAnimation} className="text-thorwhite flex flex-row gap-4 sm:flex-col sm:gap-0 sm:pl-0 text-center">
              { 
                socials.map((social,index)=><li className='py-0.5' key={index}>
                  <Link to={social.link} className={`${social.color} text-3xl text-center transition`}><FontAwesomeIcon icon={social.icon} /></Link>
                </li>)
              }
            </motion.ul>
        </motion.div>
  
        

        <motion.div variants={ContainerAnimation} initial="hidden" whileInView="show" className='py-2 overflow-clip'>
            <motion.h2 variants={textAnimation} className="text-lg font-medium text-thorwhite text-center">{t('ft2')}</motion.h2>
            <motion.ul variants={textAnimation} className="text-thorwhite text-center">
            {ourPagesLinks.map((link, index) => (<li key={index} className="py-0.5">
              <Link to={link.link} title={link.name}  className='font-poppins font-regular text-white text-[16px]' onClick={()=>window.scrollTo(0,0)}>
                {link.name}</Link></li>))}
            </motion.ul>
        </motion.div>


        <motion.div variants={ContainerAnimation} initial="hidden" whileInView="show" className='py-2 md:mx-5 overflow-clip'>
            <motion.h2 variants={textAnimation} className="text-lg font-medium text-thorwhite text-center">{t('ft3')}</motion.h2>
                  <motion.p variants={textAnimation} href="#" className="text-center text-white">{t('ft4')}</motion.p>
              
        </motion.div>

        <motion.div variants={ContainerAnimation} initial="hidden" whileInView="show" className='h-full w-full py-2 overflow-clip'>
            <motion.iframe variants={textAnimation} 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.4349659252325!2d-122.0136013235776!3d37.3322098375292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5908480994d%3A0xe75bfea4dd9a286f!2sApple%20Park%20Way%2C%20Cupertino%2C%20CA%2095014%2C%20USA!5e0!3m2!1sen!2smk!4v1700839381296!5m2!1sen!2smk" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                className='w-full h-full'>
        </motion.iframe>
        </motion.div>


    </div>
    <div className='text-center text-xs text-gray'>
    {t('ft5')}
    </div>
</footer> 
    </>
  )
};

export default Footer;
