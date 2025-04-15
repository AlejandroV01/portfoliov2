import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import AnimatedHeader from '../AnimatedHeader'
import './Resume.css'
const Resume = () => {
  const info = [
    {
      startDate: 'February 2025',
      endDate: 'PRESENT',
      role: 'Software Development Engineering',
      company: 'Amazon',
      bullets: [
        '',
      ],
      skills: ['TypeScript', 'React', 'AWS', 'Python', 'Cloud Infrastructure', 'LLM', 'CI/CD'],
      link: 'https://aws.amazon.com/',
    },
    {
      startDate: 'Aug 2020',
      endDate: 'Dec 2024',
      role: 'Florida International University',
      company: 'Bachelor of Computer Science (3.7 GPA)',
      bullets: [
        'Key Courses: Programming(I and II), Discrete Structures, Database Management, Computer Tech & Apps, Data Structures and Algorithms, Database Management, Computer Architecture',
      ],
      skills: ['Java', 'IntelliJ', 'C', 'Data Structures', 'Unix', 'Algorithms'],
      link: 'https://www.fiu.edu/',
    },
    {
      startDate: 'June 2024',
      endDate: 'Aug 2024',
      role: 'Software Developer Engineering Intern',
      company: 'Amazon',
      bullets: [
        'Developed an AI-powered chatbot portal using React TypeScript and AWS services to streamline documentation retrieval to reduce search time by over 3 hours per week for 300+ developers.',
        'Designed and implemented a RAG AI model to enable context-aware conversations and efficient documentation retrieval, leading to potential annual saving of $3,000,000+ for Amazon.',
        'Collaborated with a cross-functional team of 12 developers, UX/UI specialists, and Principal Engineers to ensure the successful integration and validation of the chatbot’s backend services.',
        'Led the onboarding of team documentation and created a POC Slack connector to enable seamless access to information from both internal documentation and Amazon’s Slack channels.',
        'Gained insights into Amazon’s CI/CD process and agile methodologies by actively participating in sprints, JIRA management, and daily standup with the team.',
      ],
      skills: ['React', 'TypeScript', 'AWS', 'Git', 'Python', 'RAG AI', 'JIRA', 'Slack'],
      link: 'https://aws.amazon.com/',
    },
    {
      startDate: 'Jan 2024',
      endDate: 'Apr 2024',
      role: 'Web Development Project Leader',
      company: 'INIT @ FIU',
      bullets: [
        'Led and collaborated with a team of 16 students to create a collaborative full-stack project using React.js, TypeScript, Tailwind CSS, and much more.',
        'Implemented agile and SCRUM project management methodologies to ensure efficient task allocation, progress tracking, and timely delivery of milestones.',
        'Oversaw and managed the integration of Supabase for database implementation and coordinated backend API development with Express and Node.js.',
        'Organized weekly meetings to facilitate brainstorming sessions as well as provide guidance on technical challenges for skill development.',
      ],
      skills: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Git', 'Vite', 'Node.js', 'Socket.io'],
      link: 'https://www.devbuds.org/',
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
            <div key={index} className={`grid gutterBig ${index === 0 && 'firstBackground'}`} style={{ gap: '2.5rem', justifyContent: 'flex-start' }}>
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
                  {job.bullets.map((bullet, index) => {
                    if (bullet === '') {
                      return null
                    }
                    return (
                      <p key={index}>&#x2022; {bullet}</p>
                    )
                  }
                  )}
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
          <a href='/Alejandro_Vera_Resume.pdf' className='flex moreInfoLink' target='_blank' rel='noopener noreferrer'>
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
