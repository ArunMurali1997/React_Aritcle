import React from 'react'
import "./TextField.css"

const TextField = ({label,type}) => {
  return (
    <div className="text_field">
          <input type={type} required />
          <span></span>
          <label>{label}</label>
        </div>
  )
}

export default TextField;