'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { BiChalkboard } from 'react-icons/bi'
import { BsHouseDoor, BsPerson } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { RiSuitcaseLine } from 'react-icons/ri'
import './NavBar.css'
const NavBar = ({ isHomeInView, isAboutInView, isSkillsInView, isResumeInView, isProjectsInView, isContactInView, handleIconClick }) => {
  const highestVisibleElement = () => {
    if (isHomeInView) return 'home'
    if (isAboutInView) return 'about'
    if (isSkillsInView) return 'skills'
    if (isResumeInView) return 'resume'
    if (isProjectsInView) return 'projects'
    if (isContactInView) return 'contact'
  }
  const shouldHighlightElements = elementName => {
    const highestVisible = highestVisibleElement()
    if (elementName === highestVisible) return elementName === highestVisible
  }
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  return (
    <div className='NavBar'>
      <motion.div className='navBarDiv' variants={container} initial='hidden' animate='show'>
        <motion.div variants={item}>
          <BsHouseDoor onClick={() => handleIconClick('home')} size={25} color={shouldHighlightElements('home') && '#15cfb6'} />
        </motion.div>
        <motion.div variants={item}>
          <BsPerson onClick={() => handleIconClick('about')} size={25} color={shouldHighlightElements('about') && '#15cfb6'} />
        </motion.div>
        <motion.div variants={item}>
          <FaReact onClick={() => handleIconClick('skills')} size={25} color={shouldHighlightElements('skills') && '#15cfb6'} />
        </motion.div>
        <motion.div variants={item}>
          <RiSuitcaseLine onClick={() => handleIconClick('resume')} size={25} color={shouldHighlightElements('resume') && '#15cfb6'} />
        </motion.div>
        <motion.div variants={item}>
          <BiChalkboard onClick={() => handleIconClick('projects')} size={25} color={shouldHighlightElements('projects') && '#15cfb6'} />
        </motion.div>
        <motion.div variants={item}>
          <FiMail onClick={() => handleIconClick('contact')} size={25} color={shouldHighlightElements('contact') && '#15cfb6'} />
        </motion.div>
      </motion.div>
      <div className='navBack'></div>
    </div>
  )
}

export default NavBar
