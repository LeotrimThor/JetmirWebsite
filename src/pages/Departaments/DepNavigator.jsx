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
            <motion.h5 variants={itemAnimation} className={isMining.Name == "mac" ? 'text-gray' : 'text-black hover:text-gray'}><Link to="/MiningDep">{t('mac')}</Link></motion.h5>
            <motion.h5 variants={itemAnimation} className={isMining.Name == "ipad" ? 'text-gray ' : 'text-black hover:text-gray'}><Link to="/ConstructionDep">{t('ipad')}</Link></motion.h5>
            <motion.h5 variants={itemAnimation} className={isMining.Name == "iphone" ? 'text-gray' : 'text-black hover:text-gray'}><Link to="/RenewableEnergyDep">{t('iphone')}</Link></motion.h5>
            <motion.h5 variants={itemAnimation} className={isMining.Name == "airpods" ? 'text-gray' : 'text-black hover:text-gray'}><Link to="/ConsultingDep">{t('airpods')}</Link></motion.h5>
            
            
        </motion.div>
    </>
  )
}
export default DepNavigator;