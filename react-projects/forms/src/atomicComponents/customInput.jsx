import React from 'react';
import './customInput.css';

const Input = ({
  disabled,
  type,
  className,
  placeholder,
  label,
  description,
  error,
  withAsterisk
}) => {

  return (
    <div className='input-container'>
      {label && <label className='input-label'>{label}{withAsterisk ? (<span style={{ color: 'red' }}> *</span>) : null}</label>}
      {description && <span className='input-description'>{description}</span>}
      <input
        disabled={disabled}
        type={type}
        className={error ? `error-input error-placeholder ${className}` : className}
        placeholder={placeholder}
      />
      {error && <span className='error-description'>{error}</span>}
    </div>
  )
}

export default Input;