import Image from 'next/image'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const info = [
    {
      imgUrl: '/ValoVault.PNG',
      title: 'ValoVault',
      description:
        'ValoShop is a full-stack MERN application that allows Valorant enthusiasts to sign up, login, and track their favorite skins, while also offering social features such as adding friends and sharing liked skins for an enhanced user experience.',
      link: 'https://github.com/AlejandroV01/ValShop',
      skills: ['React', 'JavaScript', 'Node', 'Express', 'JSONWebToken', 'MongoDB', 'Emotion', 'MUI', 'Yup'],
    },
    {
      imgUrl: '/AlgoSaurus.PNG',
      title: 'AlgoSaurus',
      description:
        'Placed 3rd out of 620+ participants in the ShellHacks 2022 Hackathon by designing and launching an interactive algorithm visualizer using TypeScript, React.js, and modular CSS, while seamlessly integrating Firebase for project deployment and scalability to benefit beginner programmers.',
      link: 'https://algo-saurus.web.app/',
      skills: ['React', 'TypeScript', 'Framer Motion', 'Victory', 'TS Particles'],
    },
    {
      imgUrl: '/GameDeals.png',
      title: 'GameDeals',
      description:
        'I leveraged the CheapShark API for seamless integration with a Firebase database and authentication system, enabling efficient GET requests to display discounted video game deals from over 20 stores, resulting in a captivating user experience enhanced by an aesthetically pleasing UI layout.',
      link: 'https://gamedeal.netlify.app/',
      skills: ['React', 'JavaScript', 'Zustand', 'Firebase', 'Axios', 'RSuite'],
    },
  ]
  return (
    <div className='gutterHuge'>
      <h1 className='lighterHeading gutterBig'>
        My <span className='mainColor '>Projects</span>
      </h1>
      {info.map((project, index) => {
        return (
          <div key={index} className='grid gutterBig' style={{ gap: '2.5rem', justifyContent: 'flex-start' }}>
            <a href={project.link} className='coverLink' target='_blank' rel='noopener noreferrer' />
            {/* eslint-disable-next-line */}
            <img className='leftGrid leftGridMod fullWidth' alt={project.title} src={project.imgUrl} loading='lazy' />
            <div className='flexVert rightGrid rightGridMod'>
              <div className='flex gutter' style={{ alignItems: 'center' }}>
                <h3 className=' projectResumeTitle'>{project.title}</h3>
                <div>
                  <FiExternalLink className='externalLink' size={18} />
                </div>
              </div>
              <p className='subtleText gutterSmall'>{project.description}</p>
              <div className='flex ' style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.skills.map((skill, index) => (
                  <div key={index} className='chip chipSecond'>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
