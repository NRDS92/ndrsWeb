import React from 'react'

import meImg from "../assets/me.png"

import GridItem from '../components/GridItem'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#241F1C] p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-12 gap-4">
        <GridItem className="col-span-12 md:col-span-6 row-span-2 bg-[#2E2825] text-white">
            <h1 className="text-4xl lg:text-5xl font-serif italic mb-4">
                Creative direction grounded in clarity and emotion.
            </h1>
        </GridItem>
        <GridItem className="col-span-12 md:col-span-6 row-span-2 overflow-hidden">
          <img className="h-full w-full bg-cover bg-center" src={meImg } />
        </GridItem>
        <GridItem className="col-span-12 lg:col-span-4 row-span-4 bg-[#D1C7BB] text-[#2E2825]">
          <h2 className="text-2xl font-sans mb-4">Soft Form</h2>
        </GridItem>
        <GridItem className="col-span-12 md:col-span-6 lg:col-span-8 row-span-1 bg-[#2E2825] text-white flex flex-col justify-end">
          {/* Contenido de la biografía */}
          <p className="text-sm">
            **Mira Chen** is a creative director specializing in brand storytelling...
          </p>
        </GridItem>
        <GridItem className="col-span-12 md:col-span-6 lg:col-span-8 row-span-1 bg-[#D1C7BB] text-[#2E2825] flex items-end justify-between">
          <h2 className="text-3xl font-bold">Contact me</h2>
          {/* Ícono de flecha o enlace */}
        </GridItem>

        </div>
    </div>
  )
}
