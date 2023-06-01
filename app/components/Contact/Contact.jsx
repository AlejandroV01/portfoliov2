'use client'
import emailjs from '@emailjs/browser'
import { InputBase } from '@mui/material'
import { Formik } from 'formik'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import 'yup-phone'
import './Contact.css'
import Input from './Input'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const form = useRef()
  const contactSchema = yup.object().shape({
    fullName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required'),
    phone: yup
      .string()
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'invalid phone number'),
    message: yup.string().required('required'),
  })
  const initialValuesContact = {
    fullName: '',
    email: '',
    phone: '',
    message: '',
  }

  const handleFormSubmit = async (values, onSubmitProps) => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        result => {
          onSubmitProps.resetForm()
          toast.success('Successfully sent message!', {
            position: 'bottom-right',
            theme: 'dark',
          })
        },
        error => {
          toast.error(error.text, {
            position: 'bottom-right',
            theme: 'dark',
          })
        }
      )
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
                Send Message
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Contact
