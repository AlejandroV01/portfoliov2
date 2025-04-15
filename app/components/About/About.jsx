import React from 'react'
import AnimatedHeader from '../AnimatedHeader'
const About = () => {
  return (
    <div className='shortWidthSection gutterHuge'>
      <AnimatedHeader className='lighterHeading gutterBig'>
        Bridging the Gap between Imagination and <span className='mainColor'>Innovation</span>
      </AnimatedHeader>
      <p className='subtleText'>
        Hi! I’m Alejandro, a Software Engineer at Amazon, with a B.S. in Computer Science from Florida International University.
        I build full-stack, AI-powered apps using React, TypeScript, Python, Node.js, and cloud tools—focusing on clean, scalable, customer-first solutions.
      </p>
    </div>
  )
}

export default About
