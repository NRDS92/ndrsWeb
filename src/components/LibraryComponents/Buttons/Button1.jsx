import React from 'react'
import { motion } from 'framer-motion'

export default function Button1({onClick, children}){
    return (
        <motion.button
        onClick={onClick}
        className="
            w-60 h-16 rounded-xl 
            bg-white text-black 
            flex items-center justify-center 
            cursor-pointer
            transition-all duration-500
            shadow-[6px_6px_12px_rgba(0,0,0,0.25),-6px_-6px_12px_rgba(255,255,255,0.7)]
        "
        whileTap={{
            boxShadow:
            "inset 6px 6px 12px rgba(0,0,0,0.25), inset -6px -6px 12px rgba(255,255,255,0.7)",
            scale: 0.97,
        }}
        >
        <p className="text-[1.6rem]">Click me!</p>
        </motion.button>
    );
}


