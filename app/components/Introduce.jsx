import React from 'react'
import SpinningText from './SpinningText'
const Introduce = () => {
  return (
    <div className='gutterBig'>
      <h1 className='flex lighterHeading' style={{ fontSize: '5rem', display: 'inline' }}>
        Hi, I&apos;m <span className='mainColor'>Alejandro</span>,
      </h1>
      <h1 className='lighterHeading gutterBig' style={{ fontSize: '5rem' }}>
        Full Stack Engineer
      </h1>
      <p style={{ maxWidth: '550px' }} className='subtleText gutterBig'>
        Building up projects and learning more about programming is my passion. I construct accessible full-stack projects for the web.
      </p>
      <div className='flex' style={{ justifyContent: 'flex-end', right: 100 }}>
        <SpinningText />
      </div>
    </div>
  )
}

export default Introduce
