import React from 'react'
import { BsArrowRightShort, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import styles from './ContactCard.module.css'
const ContactCard = ({ contactRef, homeRef }) => {
  return (
    <div style={{ gap: '2rem' }} className={styles.card}>
      <h1>
        <a
          href='/'
          className={styles.title}
          onClick={e => {
            e.preventDefault()
            homeRef.current.scrollIntoView()
          }}
        >
          Alejandro Vera
        </a>
      </h1>
      <h2>Software Engineer</h2>
      <p className='subtleText'>
        Building up projects and learning more about programming is my passion. I construct accessible backend to frontend projects.
      </p>
      <div className='flex' style={{ gap: '0.5rem' }}>
        <a className={styles.socialIcon} href='https://github.com/AlejandroV01' target='_blank'>
          <BsGithub size={20} />
        </a>
        <a className={styles.socialIcon} href='https://www.linkedin.com/in/alejandrovera09/' target='_blank'>
          <BsLinkedin size={20} />
        </a>
      </div>
      <a href='/Alejandro_Vera_Resume.pdf' className='flex moreInfoLink' target='_blank' rel='noopener noreferrer'>
        <h3 className='moreInfoText'>
          View My <span className='mainColor'>Resume</span>
        </h3>
        <BsArrowRightShort size={25} />
      </a>
      <button className='button_main fullWidth' onClick={() => contactRef.current.scrollIntoView()}>
        <FiMail size={'1.25rem'} />
        Contact Me!
      </button>
    </div>
  )
}

export default ContactCard
