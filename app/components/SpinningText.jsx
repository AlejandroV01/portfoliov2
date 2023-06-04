'use client'
import { duration } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { BsArrowDown } from 'react-icons/bs'
import './SpinningText.css'
const SpinningText = () => {
  const textRef = useRef(null)
  useEffect(() => {
    const textElement = textRef.current
    if (textElement) {
      const text = textElement.innerText
      textElement.innerHTML = text
        .split('')
        .map((char, i) => `<span style="transform:rotate(${i * 18}deg)">${char}</span>`)
        .join('')
    }
  }, [])
  return (
    <motion.div className='circle'>
      <BsArrowDown className='textColor' size={50} />
      <div className='circle_text'>
        <motion.p ref={textRef} className='textColor' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          EXPERIENCE&#x2022;FRONTEND&#x2022;
        </motion.p>
      </div>
    </motion.div>
  )
}

export default SpinningText
