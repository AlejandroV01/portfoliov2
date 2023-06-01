'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MouseFollow from './components/MouseFollow'
import ContactCard from './scenes/ContactCard'
import InfoPanel from './scenes/InfoPanel'
import NavBar from './scenes/NavBar'
export default function HomePage() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const resumeRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const isHomeInView = useInView(homeRef)
  const isAboutInView = useInView(aboutRef)
  const isSkillsInView = useInView(skillsRef)
  const isResumeInView = useInView(resumeRef)
  const isProjectsInView = useInView(projectsRef)
  const isContactInView = useInView(contactRef)

  const handleIconClick = elementName => {
    switch (elementName) {
      case 'home':
        homeRef.current.scrollIntoView()
        break
      case 'about':
        aboutRef.current.scrollIntoView()
        break
      case 'skills':
        skillsRef.current.scrollIntoView()
        break
      case 'resume':
        resumeRef.current.scrollIntoView()
        break
      case 'projects':
        projectsRef.current.scrollIntoView()
        break
      case 'contact':
        contactRef.current.scrollIntoView()
        break
    }
  }
  return (
    <div>
      <ToastContainer />
      <div className='background'></div>
      <MouseFollow />
      <div className='main_container'>
        <div className='flex main_flex'>
          <ContactCard contactRef={contactRef} />
          <InfoPanel
            homeRef={homeRef}
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            resumeRef={resumeRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          <NavBar
            isHomeInView={isHomeInView}
            isAboutInView={isAboutInView}
            isSkillsInView={isSkillsInView}
            isResumeInView={isResumeInView}
            isProjectsInView={isProjectsInView}
            isContactInView={isContactInView}
            handleIconClick={handleIconClick}
          />
        </div>
      </div>
    </div>
  )
}
