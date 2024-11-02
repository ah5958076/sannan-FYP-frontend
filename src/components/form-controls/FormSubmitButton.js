import React from 'react'

const FormSubmitButton = ({onClick,label,icon = null,className = null}) => {

  return (
    <button
    onClick={onClick}
    type="submit"
    className={ " text-white transition-all duration-300 bg-primary-700 shadow hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center " + className}>
    {label}
    {
        icon?
          <i class={icon + " ms-2 fa-solid text-white"}></i>
        : null
    }
  </button>
  )
}

export default FormSubmitButton
