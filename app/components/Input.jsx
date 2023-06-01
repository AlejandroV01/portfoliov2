import { InputBase } from '@mui/material'
import React from 'react'
import { RiH1 } from 'react-icons/ri'
import { toast } from 'react-toastify'
import './Contact.css'
const Input = ({ label, placeholder, required = false, handleBlur, handleChange, name, span = 2, minHeight, value, error, errorMessage }) => {
  return (
    <div className='fullWidth contactInputDiv' style={{ gridColumn: `span ${span}`, position: 'relative' }}>
      <p>
        {label} {required && <span className='mainColor '>*</span>}
      </p>
      <InputBase
        name={name}
        type='text'
        style={minHeight && { paddingBottom: `${minHeight}px` }}
        placeholder={placeholder}
        className='contactInput'
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        error={error}
      />
      {error && (
        <span className='mainColor' style={{ textAlign: 'center', position: 'absolute', top: 3, left: '50%', transform: 'translateX(-50%)' }}>
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export default Input
