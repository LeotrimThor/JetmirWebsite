import React from 'react'
import { motion } from 'framer-motion';
import { ContainerAnimation, itemAnimation } from '../../utils/motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

 const DepNavigator = (isMining) => {
  const { t }=useTranslation()
    return (
    <>
        <motion.div variants={ContainerAnimation} initial="hidden" animate="show" className="bg-thorwhite sm:mt-[0px] mt-[20px] sm:w-[50%] lg:w-[240px]  md:w-[300px] text-thorblack ml-[2vw] sm:ml-[0px]  h-[230px] border-2 p-[20px] flex flex-col justify-around ">
          <motion.h1 variants={itemAnimation} className="font-bold text-2xl ">{t('product')}</motion.h1>
            <motion.h5 variants={itemAnimation} className={isMining.Name == "mac" ? 'text-thormining' : 'text-black hover:text-thormining'}><Link to="/MiningDep">{t('mac')}</Link></motion.h5>
            <motion.h5 variants={itemAnimation} className={isMining.Name == "ipad" ? 'text-thorconstruction ' : 'text-black hover:text-thorconstruction'}><Link to="/ConstructionDep">{t('ipad')}</Link></motion.h5>
            <motion.h5 variants={itemAnimation} className={isMining.Name == "iphone" ? 'text-thorenergy' : 'text-black hover:text-thorenergy'}><Link to="/RenewableEnergyDep">{t('iphone')}</Link></motion.h5>
            <motion.h5 variants={itemAnimation} className={isMining.Name == "airpods" ? 'text-thorconsulting' : 'text-black hover:text-thorconsulting'}><Link to="/ConsultingDep">{t('airpods')}</Link></motion.h5>
            <motion.h5 variants={itemAnimation} className={isMining.Name == "watch" ? 'text-thororange' : 'text-black hover:text-thorit'}>{t('watch')}</motion.h5>
            
        </motion.div>
    </>
  )
}
export default DepNavigator;