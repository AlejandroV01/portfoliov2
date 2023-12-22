import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import AnimatedHeader from '../AnimatedHeader'
import './Resume.css'
const Resume = () => {
  const info = [
    {
      startDate: 'Aug 2020',
      endDate: 'Sep 2024',
      role: 'Florida International University',
      company: 'Bachelor of Computer Science (3.7 GPA)',
      bullets: [
        'Key Courses: Programming(I and II), Discrete Structures, Database Management, Computer Tech & Apps, Data Structures and Algorithms, Database Management, Computer Architecture',
      ],
      skills: ['Java', 'IntelliJ', 'C', 'Data Structures', 'Unix', 'Algorithms'],
      link: 'https://www.fiu.edu/',
    },
    {
      startDate: 'Nov 2022',
      endDate: 'Jan 2023',
      role: 'Software Engineer',
      company: 'Seminaut Inc. (GuildGaming)',
      bullets: [
        'Developed and implemented 15+ custom UI components using React.js, Storybook, and Prop Types to decrease the JavaScript bundle by 12% and increase cross-site user accessibility.',
        'Collaborated closely with a team of 18+ members, including UX/UI designers and senior software engineers, to enhance and upgrade features using agile methodologies.',
        'Achieved feature upgrades using React and creating Flask routes in the backend that resulted in a 24% increase in account registrations.',
        'Spearheaded the implementation of an innovative automated testing framework, reducing bug resolution time by 20% and enhancing overall software performance.',
      ],
      skills: ['React', 'Storybook', 'JavaScript', 'Flask', 'Styled-Components', 'MUI', 'Gitlab', 'Flask'],
      link: 'https://guildgaming.gg/',
    },
  ]

  return (
    <div className='gutterHuge'>
      <AnimatedHeader className='lighterHeading gutterBig'>
        Education & <span className='mainColor'>Experience</span>
      </AnimatedHeader>
      <div className='flexVert' style={{ gap: '2rem' }}>
        {info.map((job, index) => {
          return (
            <div key={index} className='grid gutterBig' style={{ gap: '2.5rem', justifyContent: 'flex-start' }}>
              <a href={job.link} className='coverLink' target='_blank' rel='noopener noreferrer' />
              <p className='subtleText leftGrid leftGridResume'>
                {job.startDate.toUpperCase()} - {job.endDate.toUpperCase()}
              </p>
              <div className='flexVert rightGrid rightGridResume'>
                <div className='flex gutter' style={{ gap: '1rem', alignItems: 'center' }}>
                  <h3 className='projectResumeTitle'>
                    {job.role} &#x2022; {job.company}
                  </h3>
                  <div>
                    <FiExternalLink className='externalLink' size={18} />
                  </div>
                </div>
                <div className='flexVert gutterSmall' style={{ gap: '5rem' }}>
                  {job.bullets.map((bullet, index) => (
                    <p key={index}>&#x2022; {bullet}</p>
                  ))}
                </div>
                <div className='flex' style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                  {job.skills.map((skill, index) => (
                    <div key={index} className='chip chipSecond'>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
        <div className='flex gutterBig'>
          <a href='/AlejandroVera_Resume.pdf' className='flex moreInfoLink' target='_blank' rel='noopener noreferrer'>
            <h3 className='moreInfoText'>
              View Full <span className='mainColor'>Resume</span>
            </h3>
            <BsArrowRightShort size={25} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resume
