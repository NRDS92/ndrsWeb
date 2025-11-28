import React from 'react'

export default function Title({children}) {
  return (
    <div className='text-2xl bg-linear-to-r from-[#2cde73] to-[#93B1A6] bg-clip-text text-transparent font-semibold'>
        <h2 className='font-mono '>{children}</h2>
    </div>
  )
}
