import { motion } from 'framer-motion'
import React from 'react'
const AnimatedHeader = ({ children }) => {
  return (
    <motion.h1
      className='lighterHeading gutterBig'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h1>
  )
}

export default AnimatedHeader
