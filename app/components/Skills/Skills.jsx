/* eslint-disable react/jsx-key */
import React from 'react'
import { FaCss3, FaGithub, FaHtml5, FaJava, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiJavascript, SiMongodb, SiMui, SiNextdotjs, SiPostman, SiRedux, SiTypescript } from 'react-icons/si'
const Skills = () => {
  const info = [
    {
      title: 'Languages',
      skills: [
        ['JavaScript', <SiJavascript size={20} color='#f7df1e' />, '#f7df1e'],
        ['TypeScript', <SiTypescript size={20} color='#007acc' />, '#007acc'],
        ['Java', <FaJava size={20} color='#f89820' />, '#f89820'],
        ['HTML', <FaHtml5 size={20} color='#e34c26' />, '#e34c26'],
        ['CSS', <FaCss3 size={20} color='#264de4' />, '#264de4'],
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        ['React', <FaReact size={20} color='#61dafb' />, '#61dafb'],
        ['Node', <FaNodeJs size={20} color='#3c873a' />, '#3c873a'],
        ['Next', <SiNextdotjs size={20} color='white' />, 'white'],
        ['Express', <SiExpress size={20} color='white' />, 'white'],
      ],
    },
    {
      title: 'Tools',
      skills: [
        ['Redux', <SiRedux size={20} color='#764abc' />, '#764abc'],
        ['GitHub', <FaGithub size={20} color='#424242' />, '#424242'],
        ['MongoDB', <SiMongodb size={20} color='#0cd45b' />, '#0cd45b'],
        ['Postman', <SiPostman size={20} color='#f93748' />, '#f93748'],
        ['MUI', <SiMui size={20} color='#5188d4' />, '#5188d4'],
      ],
    },
  ]
  return (
    <div className='gutterHuge'>
      <h1 className='lighterHeading gutterBig'>
        My <span className='mainColor'>Skills</span>
      </h1>
      <div className='flex_vert' style={{ gap: '1rem' }}>
        {info.map((skill, index) => (
          <div className='flex_vert ' key={index} style={{ gap: '1rem' }}>
            <h2>{skill.title}</h2>
            <div className='flex' style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
              {skill.skills.map((tech, index) => (
                <div className='flex chip skillChip' key={index}>
                  {tech[1]}
                  <span className='skillChipText'>{tech[0]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
