/* eslint-disable react/jsx-key */
import React from 'react'
import { BsFiletypeSql } from 'react-icons/bs'
import { FaAws, FaBrain, FaCss3, FaGithub, FaHtml5, FaJava, FaJira, FaNodeJs, FaReact, FaSass, FaSlack } from 'react-icons/fa'
import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRedux,
  SiStorybook,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import AnimatedHeader from '../AnimatedHeader'
const Skills = () => {
  const info = [
    {
      title: 'Languages',
      skills: [
        ['JavaScript', <SiJavascript size={20} color='#f7df1e' />, '#f7df1e'],
        ['TypeScript', <SiTypescript size={20} color='#007acc' />, '#007acc'],
        ['Python', <SiPython size={20} color='#ffde57' />, '#ffde57'],
        ['Java', <FaJava size={20} color='#f89820' />, '#f89820'],
        ['SQL', <BsFiletypeSql size={20} color='white' />, 'white'],
        ['HTML', <FaHtml5 size={20} color='#e34c26' />, '#e34c26'],
        ['CSS', <FaCss3 size={20} color='#264de4' />, '#264de4'],
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        ['React', <FaReact size={20} color='#61dafb' />, '#61dafb'],
        ['Next', <SiNextdotjs size={20} color='white' />, 'white'],
        ['Express', <SiExpress size={20} color='white' />, 'white'],
        ['Flask', <SiFlask size={20} color='white' />, 'white'],
      ],
    },
    {
      title: 'Tools',
      skills: [
        ['Node', <FaNodeJs size={20} color='#3c873a' />, '#3c873a'],
        ['Redux', <SiRedux size={20} color='#764abc' />, '#764abc'],
        ['Git', <FaGithub size={20} color='#424242' />, '#424242'],
        ['AWS', <FaAws size={20} color='#ff7300' />, '#424242'],
        ['AI/RAG', <FaBrain size={20} color='#58f9ff' />, '#424242'],
        ['Jira', <FaJira size={20} color='#1e87e9' />, '#424242'],
        ['Slack', <FaSlack size={20} color='#e580ff' />, '#424242'],
        ['MongoDB', <SiMongodb size={20} color='#0cd45b' />, '#0cd45b'],
        ['Postman', <SiPostman size={20} color='#f93748' />, '#f93748'],
        ['MUI', <SiMui size={20} color='#5188d4' />, '#5188d4'],
        ['Firebase', <SiFirebase size={20} color='#FFA611' />],
        ['SASS', <FaSass size={20} color='#CD6799' />],
        ['Storybook', <SiStorybook size={20} color='#ff528c' />],
        ['Styled-Components', <SiStyledcomponents size={20} color='#f792bc' />],
        ['Emotion', '👩‍🎤'],
        ['JSONWebToken', <SiJsonwebtokens size={20} color='white' />],
        ['Supabase', <SiSupabase size={20} color='#3ecf8e' />],
        ['PostgreSQL', <SiPostgresql size={20} color='#008bb9' />],
        ['TailwindCSS', <SiTailwindcss size={20} color='#38bdf8' />],
        ['Figma', <SiFigma size={20} color='#ff7667' />],
        ['Vercel', <SiVercel size={20} color='white' />],
      ],
    },
  ]

  return (
    <div className='gutterHuge'>
      <AnimatedHeader className='lighterHeading gutterBig'>
        My <span className='mainColor'>Skills</span>
      </AnimatedHeader>
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
