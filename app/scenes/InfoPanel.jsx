import React from 'react'
import { BiChalkboard } from 'react-icons/bi'
import { BsHouseDoor, BsPerson } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { HiOutlineSquare3Stack3D } from 'react-icons/hi'
import { RiSuitcaseLine } from 'react-icons/ri'
import About from '../components/About'
import Contact from '../components/Contact'
import Introduce from '../components/Introduce'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
const InfoPanel = () => {
  return (
    <div style={{ width: '60%', paddingTop: '6rem' }} className='flexVert'>
      <div className='chip gutterBig'>
        <BsHouseDoor />
        <span>INTRODUCE</span>
      </div>
      <Introduce />
      <div className='chip gutterBig'>
        <BsPerson />
        <span>ABOUT</span>
      </div>
      <About />
      <div className='chip gutterBig'>
        <RiSuitcaseLine />
        <span>RESUME</span>
      </div>
      <Resume />
      <div className='chip gutterBig'>
        <BiChalkboard />
        <span>PROJECTS</span>
      </div>
      <Projects />
      <div className='chip gutterBig'>
        <BiChalkboard />
        <span>Contact</span>
      </div>
      <Contact />
    </div>
  )
}

export default InfoPanel
