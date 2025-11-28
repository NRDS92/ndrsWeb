import React from 'react'
import {motion} from 'framer-motion'

export default function GridItem({ className, children }) {
  return (
    <motion.div
    className={`p-6 ${className} rounded-3xl`}
    initial={{ opacity: 0, scale: 0.95, x:-50 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 3, type: 'spring' }}
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
  >
    {children}
  </motion.div>
  )
}
