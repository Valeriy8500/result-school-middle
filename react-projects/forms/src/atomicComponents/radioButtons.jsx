import React from 'react';
import './radioButtons.css';

const RadioButtons = ({
  onChange,
  name,
  disabled,
  type,
  label,
  description,
  withAsterisk
}) => {

  return (
    <div className='radio-container'>
      {label && <label className='radio-label'>{label}{withAsterisk ? (<span style={{ color: 'red' }}> *</span>) : null}</label>}
      {description && <span className='radio-description'>{description}</span>}
      <div className='radioBtn-block'>
        <span>Мужской</span>
        <input
          onChange={onChange}
          id='male'
          name={name}
          disabled={disabled}
          type={type}
          style={{ marginRight: '10px' }}
        />
        <span>Женский</span>
        <input
          onChange={onChange}
          id='female'
          name={name}
          disabled={disabled}
          type={type}
        />
      </div>
    </div>
  )
}

export default RadioButtons;