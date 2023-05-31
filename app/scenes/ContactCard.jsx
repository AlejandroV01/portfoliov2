import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

const ContactCard = () => {
  return (
    <div className='flex_vert card' style={{ width: '25%', gap: '2rem', minWidth: '420px' }}>
      <h1>
        <a href='/' className='title'>
          Alejandro Vera
        </a>
      </h1>
      <h2>Full Stack Engineer</h2>
      <p className='subtleText'>
        Building up projects and learning more about programming is my passion. I construct accessible full-stack projects for the web.
      </p>
      <div className='flex' style={{ gap: '0.5rem' }}>
        <a className='socialIcon' href='https://github.com/AlejandroV01'>
          <BsGithub size={20} />
        </a>
        <a className='socialIcon' href='https://www.linkedin.com/in/alejandro-vera-996579248/'>
          <BsLinkedin size={20} />
        </a>
      </div>
      <button className='button_main fullWidth'>
        <FiMail size={'1.25rem'} />
        Hire Me!
      </button>
    </div>
  )
}

export default ContactCard
