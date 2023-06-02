'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './MouseFollow.module.css'

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
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={styles.mouseFollow}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    ></div>
  )
}

export default MouseFollow
