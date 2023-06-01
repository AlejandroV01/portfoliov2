'use client'
import React, { useEffect, useRef } from 'react'
import { BsArrowDown } from 'react-icons/bs'
import './SpinningText.css'
const SpinningText = () => {
  const textRef = useRef(null)
  useEffect(() => {
    const textElement = textRef.current
    if (textElement) {
      const text = textElement.innerText
      textElement.innerHTML = text
        .split('')
        .map((char, i) => `<span style="transform:rotate(${i * 8.5}deg)">${char}</span>`)
        .join('')
    }
  }, [])
  return (
    <div className='circle'>
      <BsArrowDown className='textColor' size={50} />
      <div className='circle_text'>
        <p ref={textRef} className='textColor'>
          MY PROJECTS &#x2022; FULL STACK &#x2022;
        </p>
      </div>
    </div>
  )
}

export default SpinningText
