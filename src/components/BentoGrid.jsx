import React from 'react'
import {motion} from "framer-motion"

import GridItem from './GridItem'
import Title from './UI/Title'
import meImg from "../assets/me.png"
import logoImg from "../assets/ndrsLogoWithe.png"
import FloatingShape from './UI/FloatingShape'
import deskDynamicsImg from "../assets/deskDynamics.webp"
import juphopraImg from "../assets/Juphora.webp"
import wundRepairImg from "../assets/WundRepair.webp"
import ComponentsLibrary from './ComponentsLibrary'

export default function BentoGrid() {
  return (
    <div className='h-screen flex justify-center items-center  '>
        <div className='flex flex-col md:grid md:grid-cols-10 grid-rows-10 gap-2 md:gap-4 h-full w-full px-3 md:px-8 pt-4 pb-6 bg-linear-to-br from-[#40836a] to-[#183D3D]   '>
            <FloatingShape
                color={"bg-green-500"} size={"w-64 h-64"} top="-5%" left="10%" delay={0} /> 
            <FloatingShape
                color="bg-lime-500" size="w-48 h-48" top="40%" left="60%" delay={3} />
            <FloatingShape
                color="bg-lime-500" size="w-32 h-32" top="45%" left="-10%" delay={4} />
            <FloatingShape
                color="bg-emerald-500" size="w-48 h-48" top="20%" left="10%" delay={5} />
            <FloatingShape
                color="bg-green-500" size="w-32 h-32" top="25%" left="80%" delay={1} />
                
            <div className='col-span-10 row-span- bg-[#040D12]  rounded-3xl flex justify-center items-center '>
                <img className=' w-[100px]' src={logoImg} alt='ANDRS Logo'/>
            </div>
            <GridItem className='col-span-4 row-span-5  bg-[#040D12]  flex   md:grid md:grid-cols-5 grid-rows-5 gap-5'>
                <div className='flex col-span-5  h-full justify-between'>
                    <Title className=" ">Proyects</Title>
                <motion.i 
                animate={{
                    rotate: [0, 5, -5, 5, -5, 0],
                }}
                transition={{
                    duration: 0.8, 
                    ease: "easeInOut",
                    repeat: Infinity, 
                }}
                className="fa-solid fa-screwdriver-wrench text-[#2cde73] text-xl " ></motion.i>
                </div>
                <div className='h-full w-full col-span-3 row-span-2 flex justify-center  shadow-md shadow-[#98e2b5]  rounded-2xl '>
                    <img className=' object-cover w-full rounded-2xl  ' src={deskDynamicsImg} alt='DeskDynamics'/>
                </div>
                <div className='h-full w-full col-span-2 row-span-4 flex justify-center shadow-md shadow-[#98e2b5] rounded-2xl '>
                    <img className='object-cover  rounded-2xl ' src={wundRepairImg} alt='DeskDynamics'/>
                </div>
                <div className='h-full w-full col-span-3 row-span-2 flex justify-center shadow-md shadow-[#98e2b5] rounded-2xl '>
                    <img className='object-cover  w-full  rounded-2xl ' src={juphopraImg} alt='DeskDynamics'/>
                </div>
                
            </GridItem>
            <motion.div 
            initial={{ opacity: 1, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 5, type: 'spring' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className='col-span-3 row-span-5 p-4 text-[#2cde73] bg-primary-dark rounded-3xl flex flex-col justify-between items-center text-center '>
                <img className='[mask-image:linear-gradient(black_70%,transparent)] h-[70%]' src={meImg} alt='Andres Perdomo'/>
                <h3 className='text-4xl font-shadow font-bold bg-linear-to-r from-[#93B1A6] to-[#2cde73] bg-clip-text text-transparent '>Andres Perdomo</h3>
                <h1 className='text-xl font-semibold font-shadow '>Frontend Developer</h1>
            </motion.div>
            <GridItem className='col-span-3 row-span-8 bg-primary-dark flex justify-center items-center flex-col'>
                <div className='flex justify-between  w-full my-3'>
                    <Title >Components</Title> 
                    <motion.i className="fa-solid fa-tablet-screen-button text-[#2cde73] text-3xl"></motion.i>
                </div>
                 <ComponentsLibrary />
            </GridItem>
            <GridItem className='col-span-3 row-span-4 bg-primary-dark flex justify-center items-center'>
                <Title>Hobbies</Title>
                <i className="fa-solid fa-gamepad text-[#2cde73] text-3xl"></i>
            </GridItem>
            <GridItem className='col-span-4 row-span-4 font-patrick bg-[#5C8374] flex justify-center items-center flex-col'>
                <h3 className='font-bold text-center text-xl text-primary-dark '>Do you need a website, an app, or AI to do the work no one else wants to do?</h3>
                <p>Perfect, because that's exactly what I do while you focus on… whatever it is you're doing.</p>
                <p>Contact me and let's build something that works so well it seems like magic <span className='font-semibold'>(or luck, but just say it was me)</span>.</p>




                <h2 className='font-shadow text-5xl bg-linear-to-r from-[#b1ffb5] to-[#03d430] bg-clip-text text-transparent'>Contact me!</h2>
            </GridItem>
            <GridItem className='col-span-3 row-span- bg-primary-dark flex justify-center items-center gap-5 '>
                <i className="fa-brands fa-linkedin text-[#2cde73] text-3xl"></i>
                <i className="fa-brands fa-github text-[#2cde73] text-3xl"></i>
                <i className="fa-brands fa-youtube text-[#2cde73] text-3xl"></i>
                <i className="fa-brands fa-instagram text-[#2cde73] text-3xl"></i>
            </GridItem>
        </div>
    </div>
  )
}
