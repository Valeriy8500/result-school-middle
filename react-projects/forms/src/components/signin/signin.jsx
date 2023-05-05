import React from 'react';
import Input from '../../atomicComponents/customInput';
import './signin.css';

const Signin = () => {
  return (
    <div>
      <h2 className='title'>Форма 1</h2>
      <form className='form'>
        <Input
          disabled={false}
          type='email'
          className='input'
          placeholder='email'
          label='Your email'
          description='Описание'
          error='error'
          withAsterisk={true}
        />
        <Input
          disabled={false}
          type='password'
          className='input'
          placeholder='password'
          label='Your password'
          description='Описание'
          error='error'
          withAsterisk={true}
        />
        <button type="submit" className='button'>Войти</button>
      </form>
    </div>
  )
}

export default Signin;