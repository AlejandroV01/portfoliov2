import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import AnimatedHeader from '../AnimatedHeader'
const Projects = () => {
  const info = [
    {
      imgUrl: '/devbuds.PNG',
      title: 'Devbuds',
      description:
        'Devbuds is a collaborative platform where users can spark project ideas and assemble teams. By posting project needs and applying to relevant roles, users can find collaborators with matching skills to bring their ideas to life. Built with React.js, TypeScript, and Tailwind CSS, this platform fosters teamwork for non-commercial creative projects.',
      link: 'https://www.devbuds.org/',
      skills: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redux', 'Socket.io', 'Git', 'Vite'],
    },
    {
      imgUrl: '/AlgoSaurus.PNG',
      title: 'AlgoSaurus',
      description:
        'Placed 3rd out of 620+ participants in the ShellHacks 2022 Hackathon by designing and launching an interactive algorithm visualizer using TypeScript, React.js, and modular CSS, while seamlessly integrating Firebase for project deployment and scalability to benefit beginner programmers.',
      link: 'https://algo-saurus.web.app/',
      skills: ['React.js', 'TypeScript', 'Framer Motion', 'Victory', 'TS Particles'],
    },
    {
      imgUrl: '/BarkTweet.png',
      title: 'BarkTweet',
      description:
        'BarkTweet is a pet-centric social media app, a Twitter-like platform for pets. Built with React.js.js, Zustand, and Tailwind CSS on the frontend, and Node.js, Next.js, and PostgreSQL on the backend, it ensures efficient data management. Leadership efforts placed the project in the top 5% of submissions. The optimized frontend utilizes server-side rendering and Tailwind CSS for a 48% faster CSS bundling process, delivering a responsive and top-performing experience. Hosted on Vercel, BarkTweet redefines social media for pets.',
      link: 'https://github.com/AlejandroV01/pet-social',
      skills: ['React.js', 'Zustand', 'TailwindCSS', 'Node.js', 'Next.js', 'PostgreSQL', 'Vercel'],
    },
  ]

  return (
    <div className='gutterHuge'>
      <AnimatedHeader className='lighterHeading gutterBig'>
        My <span className='mainColor '>Projects</span>
      </AnimatedHeader>
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
