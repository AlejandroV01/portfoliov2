import React from 'react'
import AnimatedHeader from '../AnimatedHeader'
const About = () => {
  return (
    <div className='shortWidthSection gutterHuge'>
      <AnimatedHeader className='lighterHeading gutterBig'>
        Bridging the Gap between Imagination and <span className='mainColor'>Innovation</span>
      </AnimatedHeader>
      <p className='subtleText'>
        I&apos;m Alejandro, a software engineer passionate about software/web development. Currently pursuing a Bachelor&apos;s Degree in Computer
        Science, I am expanding my skills beyond the school-taught Java by self-teaching JavaScript, Next.js, Express.js, Node.js, React.js, MongoDB,
        and much more. In my free time, I work on personal projects, engage in programming events, and prioritize maintaining a healthy mental state
        through activities like walking my dog and spending time with family and friends.
      </p>
    </div>
  )
}

export default About
