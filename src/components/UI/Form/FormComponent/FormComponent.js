import React from 'react'
import FormInput from '../FormInput/FormInput'
import FacebookLogin from '../../../services/FacebookLogin/FacebookLogin'
import GoogleLogin from '../../../services/GoogleLogin/GoogleLogin'
import AppleLogin from '../../../services/AppleLogin/AppleLogin'
import VkontakteLogin from '../../../services/VkontakteLogin/VkontakteLogin'
import { getFieldError } from '../Handlers/Handlers'

const FormComponent = ({ inputName, inputType, submit, value, onChange, typeForm, placeholderName, error }) => {
  let form = null

  if (inputName) {
    form = inputName.map((name, index) => (
      <FormInput
        key={name[index]}
        type={inputType[index]}
        required
        placeholder={placeholderName[index]}
        name={name}
        value={value}
        onChange={onChange}
        error={getFieldError(error, name)}
      />
    ))
  }
  return (
    <>
      <form onSubmit={submit}>
        {form}
        <button type="submit">{typeForm}</button>
        <FacebookLogin />
        <GoogleLogin />
        <AppleLogin />
        <VkontakteLogin />
      </form>
    </>
  )
}

export default FormComponent
