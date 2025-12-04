import React, { useState } from 'react'
import GridItem from './GridItem'
import Buttons from './Buttons'
import Inputs from './Inputs'
import TextAnimations from './TextAnimations'
import Loaders from './Loaders'



export default function Library({content, setContent}) {

    function handleComponentList(e){
        setContent(e.currentTarget.name)
    }
    console.log(content)
    let componentsToShow 

    switch (content) {
        case "buttons":
            componentsToShow = <Buttons></Buttons>
            break;
        case "inputs":
            componentsToShow = <Inputs></Inputs>
            break;
        case "text-anims":
            componentsToShow = <TextAnimations></TextAnimations>
            break;
        case "loaders":
            componentsToShow = <Loaders></Loaders>
            break;
    
        default:
            break;
    }
  return (
    <div className=' grid grid-cols-10 grid-rows-10 mt-1  gap-1'>
        <div className='col-span-10 row-span-1 '>
            <ul className='flex justify-between '>
                <li className='w-full bg-primary-dark text-white font-bold '  >
                    <button className='w-full h-full' onClick={(e)=>handleComponentList(e)} name='buttons'>
                    Buttons
                    </button>
                </li>
                <li  className='w-full p-2 bg-primary-dark  text-center text-white font-bold'>
                    <button className='w-full h-full' onClick={(e)=>handleComponentList(e)} name='inputs'>
                    Input
                    </button>
                </li>
                <li className='w-full p-2 bg-primary-dark  text-center text-white font-bold'  >
                    <button className='w-full h-full' onClick={(e)=>handleComponentList(e)} name='text-anims'>
                    Text Animations
                    </button>
                </li>
                <li  className='w-full p-2 bg-primary-dark  text-center text-white font-bold' >
                    <button className='w-full h-full' onClick={(e)=>handleComponentList(e)} name='loaders'>
                    Loaders
                    </button>
                </li>
                

                
                
            </ul>
            
        </div>
        <div className='col-span-10 row-span-9 flex justify-center items-center'>
                {componentsToShow}
                </div>
        
    </div>
    
  )
}
