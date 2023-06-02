import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import './Resume.css'
const Resume = () => {
  const info = [
    {
      startDate: 'Aug 2020',
      endDate: 'Sep 2024',
      role: 'Florida International University',
      company: 'Bachelor of Computer Science (3.5 GPA)',
      bullets: ['Key Courses: Programming(I and II), Discrete Structures, Database Concepts, Computer Tech & Apps, Data Structures and Algorithms'],
      skills: ['Java', 'IntelliJ', 'C', 'Data Structures', 'Unix'],
      link: 'https://www.fiu.edu/',
    },
    {
      startDate: 'Nov 2022',
      endDate: 'Jan 2023',
      role: 'Software Engineer',
      company: 'Seminaut Inc. (GuildGaming)',
      bullets: [
        'Collaborated closely with a team of 15+ members, including UX/UI designers and senior software engineers, to enhance and upgrade features using agile methodologies.',
        'Developed and implemented 15+ custom components, including buttons, cards, headers, and inputs, using React, Storybook, and PropTypes.',
        "Achieved feature upgrades that resulted in a 20% increase in account registrations, contributing to the young platform's user base growth.",
      ],
      skills: ['React', 'Storybook', 'JavaScript', 'Flask', 'Styled-Components', 'MUI', 'Gitlab'],
      link: 'https://guildgaming.gg/',
    },
  ]
  return (
    <div className='gutterHuge'>
      <h1 className='lighterHeading gutterBig'>
        Education & <span className='mainColor'>Experience</span>
      </h1>
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
