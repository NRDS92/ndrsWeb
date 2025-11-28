import React from 'react'
import Button1 from './LibraryComponents/Buttons/Button1'

import AnimatedBorderButton from './LibraryComponents/Buttons/AnimatedBorderButton'

export default function Library() {
  return (
    <div className='grid grid-cols-10 grid-rows-10 mt-5'>
        <div className='col-span-10 row-span-1'>
            <ul className='flex justify-between'>
                <li>Buttons</li>
                <li>Input</li>
                <li>Text Animations</li>
                <li>Loaders</li>
            </ul>
        </div>
        <div className='row-span-9 col-span-1 '>
            Item
        </div>
        <div className='flex row-span-9 col-span-9 justify-center items-center    '>
            <Button1></Button1>
            <AnimatedBorderButton />
        </div>
    </div>
  )
}
