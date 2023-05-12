import React from 'react';
import Input from '../../atomicComponents/customInput';
import './signin.css';

const Signin = ({ onSubmit }) => {
  const [value, setValue] = React.useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <h2 className='title'>Форма 1</h2>
      <form
        className='form'
        onSubmit={e => onSubmit(e, value)}
      >
        <Input
          value={value.email}
          onChange={onChange}
          name='email'
          disabled={false}
          type='email'
          className='input'
          placeholder=' email'
          label='Your email'
          description='Описание'
          error=''
          variant='filled'
          withAsterisk={true}
        />
        <Input
          value={value.password}
          onChange={onChange}
          name='password'
          disabled={false}
          type='password'
          className='input'
          placeholder=' password'
          label='Your password'
          description='Описание'
          error=''
          variant=''
          withAsterisk={true}
        />

        <button type="submit" className='button'>Войти</button>
      </form>
    </div>
  )
}

export default Signin;