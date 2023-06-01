'use client'
import emailjs from '@emailjs/browser'
import { InputBase } from '@mui/material'
import 'dotenv/config'
import { Formik } from 'formik'
import React, { useRef } from 'react'
import * as yup from 'yup'
import './Contact.css'
import Input from './Input'
const Contact = () => {
  const form = useRef()
  const contactSchema = yup.object().shape({
    fullName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required'),
    phone: yup.string(),
    message: yup.string().required('required'),
  })
  const initialValuesContact = {
    fullName: '',
    email: '',
    phone: '',
    message: '',
  }

  const handleFormSubmit = async (values, onSubmitProps, e) => {
    e.preventDefault()
    const email = values.email
    const fullName = values.fullName
    const message = values.message
    let phone
    if (phone.length > 0) {
      phone = values.phone
    }
    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
  }
  return (
    <div className='gutterHuge'>
      <h1 className='lighterHeading gutterBig'>
        Let&apos;s Work <span className='mainColor '>Together!</span>
      </h1>
      <h2 className='lighterHeading gutterBig'>alexvera0109@gmail.com</h2>
      <Formik onSubmit={handleFormSubmit} initialValues={initialValuesContact} validationSchema={contactSchema}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, resetForm }) => (
          <form onSubmit={handleSubmit} ref={form}>
            <div className='contactGrid gutter'>
              <Input
                value={values.fullName}
                label={'Full Name'}
                placeholder={'Your Full Name'}
                handleBlur={handleBlur}
                handleChange={handleChange}
                required
                name={'fullName'}
                error={Boolean(touched.fullName) && Boolean(errors.fullName)}
                errorMessage={errors.fullName}
              />
              <Input
                value={values.email}
                label={'Email'}
                placeholder={'Your Email Address'}
                handleBlur={handleBlur}
                handleChange={handleChange}
                required
                name={'email'}
                error={Boolean(touched.email) && Boolean(errors.email)}
                errorMessage={errors.email}
              />
              <Input
                name={'phone'}
                value={values.phone}
                label={'Phone'}
                placeholder={'Your Phone Number'}
                handleBlur={handleBlur}
                handleChange={handleChange}
                error={Boolean(touched.phone) && Boolean(errors.phone)}
                errorMessage={errors.phone}
              />
              <div className='fullWidth contactInputDiv' style={{ gridColumn: `span 4`, position: 'relative' }}>
                <p>
                  Message <span className='mainColor '>*</span>
                </p>
                <InputBase
                  name='message'
                  value={values.message}
                  className='tall-input '
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='Write your message here...'
                  multiline
                  error={Boolean(touched.message) && Boolean(errors.message)}
                  rows={7}
                ></InputBase>
                <span className='mainColor' style={{ textAlign: 'center', position: 'absolute', top: 3, left: '50%', transform: 'translateX(-50%)' }}>
                  {touched.message && errors.message && errors.message}
                </span>
              </div>
            </div>
            <div>
              <button type='submit' className='button_main' style={{ fontSize: '1rem' }}>
                SUBMIT
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Contact
