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
    <div style={{ width: '60%', paddingTop: '6rem' }} className='flexVert'>
      <div className='chip gutterBig' ref={homeRef}>
        <BsHouseDoor />
        <span>INTRODUCE</span>
      </div>
      <Introduce />
      <div className='chip gutterBig' ref={aboutRef}>
        <BsPerson />
        <span>ABOUT</span>
      </div>
      <About />
      <div className='chip gutterBig' ref={skillsRef}>
        <FaReact />
        <span>SKILLS</span>
      </div>
      <Skills />
      <div className='chip gutterBig' ref={resumeRef}>
        <RiSuitcaseLine />
        <span>RESUME</span>
      </div>
      <Resume />
      <div className='chip gutterBig' ref={projectsRef}>
        <BiChalkboard />
        <span>PROJECTS</span>
      </div>
      <Projects />
      <div className='chip gutterBig' ref={contactRef}>
        <FiMail />
        <span>Contact</span>
      </div>
      <Contact />
    </div>
  )
}

export default InfoPanel
