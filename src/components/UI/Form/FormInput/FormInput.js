import React from 'react'
import './FormInput.scss'

const FormInput = ({ type, name, value, onChange, placeholder, className, required }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`InputStyle ${className}`}
    required={required}
  />
)

export default FormInput
