import React from 'react';
import './customInput.css';

const Input = ({
  value,
  onChange,
  name,
  disabled,
  type,
  className,
  placeholder,
  label,
  description,
  error,
  variant,
  withAsterisk
}) => {

  const getClassName = () => {
    if (error) {
      if (variant === 'filled') {
        return `error-input error-placeholder filled-input ${className}`;
      } else if (variant === 'unstyled') {
        return `error-input error-placeholder unstyled-input ${className}`;
      } else {
        return `error-input error-placeholder ${className}`;
      }
    } else {
      if (variant === 'filled') {
        return `filled-input ${className}`;
      } else if (variant === 'unstyled') {
        return `unstyled-input ${className}`;
      } else {
        return className;
      }
    }
  };

  return (
    <div className='input-container'>
      {label && <label className='input-label'>{label}{withAsterisk ? (<span style={{ color: 'red' }}> *</span>) : null}</label>}
      {description && <span className='input-description'>{description}</span>}
      <input
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        type={type}
        className={getClassName()}
        placeholder={placeholder}
      />
      {error && <span className='error-description'>{error}</span>}
    </div>
  )
}

export default Input;