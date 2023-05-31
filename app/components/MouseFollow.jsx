'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const MouseFollow = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 })
  const { x, y } = point
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current

      const x = clientX - element.offsetLeft - element.offsetWidth / 2
      const y = clientY - element.offsetTop - element.offsetHeight / 2
      setPoint({ x, y })
      console.log(x, y)
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return (
    <div
      ref={ref}
      className='mousefollow'
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    ></div>
  )
}

export default MouseFollow
