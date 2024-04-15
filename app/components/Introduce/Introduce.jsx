import { motion } from 'framer-motion'
import React from 'react'
import SpinningText from '../SpinningText'
const Introduce = () => {
  const line1 = "Hi, I'm"
  const name = 'Alejandro'
  const line2 = 'Software Engineer'
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <div className='gutterHuge'>
      <motion.h1
        className='flex lighterHeading introduceHeading '
        style={{ fontSize: '5rem', display: 'inline' }}
        variants={sentence}
        initial='hidden'
        animate='visible'
      >
        {line1.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          )
        })}{' '}
        {name.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter} className='mainColor'>
              {char}
            </motion.span>
          )
        })}
        <br />
        {line2.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          )
        })}
      </motion.h1>

      <p style={{ maxWidth: '550px', marginTop: '3rem' }} className='subtleText gutterBig'>
        Building up projects and learning more about programming is my passion. I construct accessible backend to frontend projects.
      </p>
      <div className='flex' style={{ justifyContent: 'flex-end', right: 100 }}>
        <SpinningText />
      </div>
    </div>
  )
}

export default Introduce
