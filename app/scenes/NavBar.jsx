'use client'
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
  return (
    <div className='NavBar'>
      <div className='navBarDiv'>
        <BsHouseDoor onClick={() => handleIconClick('home')} size={25} color={shouldHighlightElements('home') && '#15cfb6'} />
        <BsPerson onClick={() => handleIconClick('about')} size={25} color={shouldHighlightElements('about') && '#15cfb6'} />
        <FaReact onClick={() => handleIconClick('skills')} size={25} color={shouldHighlightElements('skills') && '#15cfb6'} />
        <RiSuitcaseLine onClick={() => handleIconClick('resume')} size={25} color={shouldHighlightElements('resume') && '#15cfb6'} />
        <BiChalkboard onClick={() => handleIconClick('projects')} size={25} color={shouldHighlightElements('projects') && '#15cfb6'} />
        <FiMail onClick={() => handleIconClick('contact')} size={25} color={shouldHighlightElements('contact') && '#15cfb6'} />
      </div>
      <div className='navBack'></div>
    </div>
  )
}

export default NavBar
