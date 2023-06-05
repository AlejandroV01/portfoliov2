import React from 'react'
import { BiChalkboard } from 'react-icons/bi'
import { BsHouseDoor, BsPerson } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { RiSuitcaseLine } from 'react-icons/ri'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Introduce from '../components/Introduce/Introduce'
import Projects from '../components/Projects/Projects'
import Resume from '../components/Resume/Resume'
import Skills from '../components/Skills/Skills'
const InfoPanel = ({ homeRef, aboutRef, skillsRef, resumeRef, projectsRef, contactRef }) => {
  return (
    <div className='flexVert InfoPanel'>
      <div className='chip gutterBig' ref={homeRef}>
        <BsHouseDoor />
        <span className='mainChipText'>INTRODUCE</span>
      </div>
      <Introduce />
      <div className='chip gutterBig' ref={aboutRef}>
        <BsPerson />
        <span className='mainChipText'>ABOUT</span>
      </div>
      <About />
      <div className='chip gutterBig' ref={skillsRef}>
        <FaReact />
        <span className='mainChipText'>SKILLS</span>
      </div>
      <Skills />
      <div className='chip gutterBig' ref={resumeRef}>
        <RiSuitcaseLine />
        <span className='mainChipText'>RESUME</span>
      </div>
      <Resume />
      <div className='chip gutterBig' ref={projectsRef}>
        <BiChalkboard />
        <span className='mainChipText'>PROJECTS</span>
      </div>
      <Projects />
      <div className='chip gutterBig' ref={contactRef}>
        <FiMail />
        <span className='mainChipText'>Contact</span>
      </div>
      <Contact />
    </div>
  )
}

export default InfoPanel
